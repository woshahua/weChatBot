import path       from 'path'
import readPkgUp  from 'read-pkg-up'

import npm          from 'npm-programmatic'
import pkgDir       from 'pkg-dir'
import semver       from 'semver'

import {
  Puppet,
  PuppetImplementation,
  PuppetOptions,
}                         from 'wechaty-puppet'

import {
  log,
}                       from './config'
import {
  PUPPET_DEFAULT,
  PUPPET_DEPENDENCIES,
  PuppetName,
}                       from './puppet-config'
import {
  Wechaty,
}                       from './wechaty'

export interface ResolveOptions {
  wechaty        : Wechaty,
  puppet         : Puppet | PuppetName,
  puppetOptions? : PuppetOptions,
}

export class PuppetManager {

  public static async resolve (
    options: ResolveOptions
  ): Promise<Puppet> {
    log.verbose('PuppetManager', 'resolve({wechaty: %s, puppet: %s, puppetOptions: %s})',
                                  options.wechaty,
                                  options.puppet,
                                  JSON.stringify(options.puppetOptions),
                )

    if (!options.puppet || options.puppet === 'default') {
      options.puppet = PUPPET_DEFAULT
    } else if (options.puppet === 'padchat') {
      // issue #1496 https://github.com/Chatie/wechaty/issues/1496
      // compatible old settings for padchat
      options.puppet = 'wechaty-puppet-padchat'
    }

    let puppetInstance: Puppet

    if (options.puppet instanceof Puppet) {
      puppetInstance = await this.resolveInstance(options.puppet)
    } else {
      const MyPuppet = await this.resolveName(options.puppet)
      /**
       * We will meet the following error:
       *
       *  [ts] Cannot use 'new' with an expression whose type lacks a call or construct signature.
       *
       * When we have different puppet with different `constructor()` args.
       * For example: PuppetA allow `constructor()` but PuppetB requires `constructor(options)`
       *
       * SOLUTION: we enforce all the PuppetImplenmentation to have `options` and should not allow default parameter.
       * Issue: https://github.com/Chatie/wechaty-puppet/issues/2
       */
      puppetInstance = new MyPuppet(options.puppetOptions)
    }

    return puppetInstance
  }

  protected static async resolveName (puppetName: PuppetName): Promise<PuppetImplementation> {
    log.verbose('PuppetManager', 'resolveName(%s)', puppetName)

    await this.checkModule(puppetName)

    const puppetModule = await import(puppetName)
    const MyPuppet = puppetModule.default as PuppetImplementation

    return MyPuppet
  }

  protected static async checkModule (puppetName: PuppetName): Promise<void> {
    log.verbose('PuppetManager', 'checkModule(%s)', puppetName)

    const versionRange = PUPPET_DEPENDENCIES[puppetName]

    /**
     * 1. Not Installed
     */
    if (!this.installed(puppetName)) {
      await this.install(puppetName, versionRange)
      return
    }

    const moduleVersion = this.getModuleVersion(puppetName)

    const satisfy = semver.satisfies(
      moduleVersion,
      versionRange,
    )

    /**
     * 2. Installed But Version Not Satisfy
     */
    if (!satisfy) {
      log.silly('PuppetManager', 'checkModule() %s installed version %s NOT satisfied range %s',
                                  puppetName,
                                  moduleVersion,
                                  versionRange,
                )
      await this.install(puppetName, versionRange)
      return
    }

    /**
     * 3. Installed and Version Satisfy
     */
    log.silly('PuppetManager', 'checkModule() %s installed version %s satisfied range %s',
                                puppetName,
                                moduleVersion,
                                versionRange,
              )
    return
  }

  protected static getModuleVersion (moduleName: string): string {
    const modulePath = path.dirname(
      require.resolve(
        moduleName,
      ),
    )
    const pkg     = readPkgUp.sync({ cwd: modulePath }).pkg
    const version = pkg.version

    return version
  }

  protected static async resolveInstance (instance: Puppet): Promise<Puppet> {
    log.verbose('PuppetManager', 'resolveInstance(%s)', instance)
    // const version = instance.version()
    // const name = instance.name()

    // const satisfy = semver.satisfies(
    //   version,
    //   puppetConfig.npm.version,
    // )

    // TODO: check the instance version to satisfy semver
    return instance
  }

  protected static installed (moduleName: string): boolean {
    try {
      require.resolve(moduleName)
      return true
    } catch (e) {
      return false
    }
  }

  public static async install (
    puppetModule : string,
    puppetVersion = 'latest',
  ): Promise<void> {
    log.info('PuppetManager', 'install(%s@%s) please wait ...', puppetModule, puppetVersion)
    await npm.install(
      `${puppetModule}@${puppetVersion}`,
      {
        cwd    : await pkgDir(__dirname),
        output : true,
        save   : false,
      },
    )
    log.info('PuppetManager', 'install(%s@%s) done', puppetModule, puppetVersion)
  }

}
