import {
  config,
  Contact,
  Message,
  Wechaty,
}           from '../src/' // from 'wechaty'

import { FileBox }  from 'file-box'
import { generate } from 'qrcode-terminal'
import fs = require("fs")
import fetch from "node-fetch"

// use zlib to unpack zipped json data
const zlib = require("zlib")

/**
 *
 * 1. Declare your Bot!
 *
 */
const bot = new Wechaty({
  profile : config.default.DEFAULT_PROFILE,
})

/**
 *
 * 2. Register event handlers for Bot
 *
 */
bot
.on('logout', onLogout)
.on('login',  onLogin)
.on('scan',   onScan)
.on('error',  onError)
.on('message', onMessage)

/**
 *
 * 3. Start the bot!
 *
 */
bot.start()
.catch(async e => {
  console.error('Bot start() fail:', e)
  await bot.stop()
  process.exit(-1)
})

/**
 *
 * 4. You are all set. ;-]
 *
 */

/**
 *
 * 5. Define Event Handler Functions for:
 *  `scan`, `login`, `logout`, `error`, and `message`
 *
 */
function onScan (qrcode: string, status: number) {
  generate(qrcode, { small: true })

  // Generate a QR Code online via
  // http://goqr.me/api/doc/create-qr-code/
  const qrcodeImageUrl = [
    'https://api.qrserver.com/v1/create-qr-code/?data=',
    encodeURIComponent(qrcode),
  ].join('')

  console.log(`[${status}] ${qrcodeImageUrl}\nScan QR Code above to log in: `)
}

function onLogin (user: Contact) {
  console.log(`${user.name()} login`)
  bot.say('Wechaty login').catch(console.error)
  const contact = bot.Contact.load("gaohang0742")
  var D = new Date()
  var hr = D.getHours()
  var mt = D.getMinutes()
  contact.say("小弟已登录 " +hr.toString() + ":" + mt.toString())
}

function onLogout (user: Contact) {
  console.log(`${user.name()} logouted`)
}

function onError (e: Error) {
  console.error('Bot error:', e)
  /*
  if (bot.logonoff()) {
    bot.say('Wechaty error: ' + e.message).catch(console.error)
  }
  */
}

/**
 *
 * 6. The most important handler is for:
 *    dealing with Messages.
 *
 */

let fileNum = 8

async function onMessage (msg: Message) {

  console.log(msg.toString())

  if (msg.age() > 60) {
    console.log('Message discarded because its TOO OLD(than 1 minute)')
    return
  }

  let contact = msg.from()!.name()

  if ( contact === "Far high." || contact === ",,,,,"|| contact === "高航"){

    if (msg.type() === bot.Message.Type.Image){

	await fs.readdir("/home/pi/Project/wechaty/examples/pics/", (err, files) =>{
	    if (err) throw err
	    fileNum = files.length
	    
	})
        fileNum = fileNum - 2 + 1
        let newPic = await msg.toFileBox()
        let picLoc = "/home/pi/Project/wechaty/examples/pics/" + fileNum + ".jpg"
        await newPic.toFile(picLoc, true)
	      msg.say("表情包已收藏")
        fileNum = fileNum + 1
    }
    else if ("wd" == msg.text()){
       const url = "http://wthrcdn.etouch.cn/weather_mini?city=北京"
       msg.say("get weather")
       let json;
       try{
           const response = await fetch(url)
           var unpack_res
           zlib.gunzip(response, function(error : any, binary : any){
	     if(error){
		console.log("error happen on gzip")
	   }else{
             unpack_res = binary.toString("utf-8")
             json = await unpack_res.json()
	   }
           })
           msg.say(JSON.stringify(json))
       }catch (error){
        msg.say("fail")
        console.log(error)
       }
    }

    else if ("todo" == msg.text()){
 	fs.readFile("/home/pi/Project/wechaty/examples/todo.txt", (err, data) => {
	    if (err) throw err
	    msg.say(data.toString())
	})
	
	if ("add" == msg.text()){
	    msg.say("input the message you want to add")
	}
	if("quit" == msg.text()){
	    msg.say("task manager finish")
	    return
	}
}


    /* love egg */
    else if ("李天娥" == msg.text()
      /*&& !msg.self()*/
    ) {
      await msg.say("这个名字好像是我大哥喜欢的女孩啊...")
      let fileLoc1 = "/home/pi/Project/wechaty/examples/pics/heart.jpg"
      let fileBox1 = FileBox.fromFile(fileLoc1)
      await msg.say(fileBox1)

      return
  }
  
  else if ("dice" == msg.text()){
     let d1 = "●"
     let d2 = "●●"
     let d3 = "  ●\n" + " ●\n" + "●\n"
     let d4 = "●●\n" + "●●\n" 
     let d5 = "● ●\n" + "  ●\n" + "● ●\n"
     let d6 = "●●\n" + "●●\n" +"●●\n" 
     
     let dmin = 1
     let dmax = 6
     let tmpInt = Math.floor(Math.random()*(dmax + 1 - dmin)) + dmin

     
     if(tmpInt === 1){
      await msg.say(d1)
     }
     else if(tmpInt === 2){
      await msg.say(d2)
     }
     else if(tmpInt === 3){
      await msg.say(d3)
     }
     else if(tmpInt === 4){
      await msg.say(d4)
     }
     else if(tmpInt === 5){
      await msg.say(d5)
     }
     else if(tmpInt === 6){
      await msg.say(d6)
     }

     let botInt = Math.floor(Math.random()*(dmax + 1 - dmin)) + dmin
      
     if(botInt === 1){
       await msg.say("dice")
       await msg.say(d1)
     }
     else if(botInt === 2){
       await msg.say("dice")
       await msg.say(d2)
     }
     else if(botInt === 3){
      await msg.say("dice")
      await msg.say(d3)
     }
    else if(botInt === 4){
     await msg.say("dice")
     await msg.say(d4)
     }
    else if(botInt === 5){
       await msg.say("dice")
       await msg.say(d5)
     }
     else if(botInt === 6){
       await msg.say("dice")
       await msg.say(d6)
     }

      await msg.say(fileBox2)
     }
     else{
       let fileBox2 = FileBox.fromFile("/home/pi/Project/wechaty/examples/pics/lose.jpg")
       await msg.say(fileBox2)
 
     }
     return
  }

  else if ((msg.type() !== bot.Message.Type.Image && msg.type() !== bot.Message.Type.Text
      )|| !/^(ding|ping|bing|code)$/i.test(msg.text())
      /*&& !msg.self()*/
  ) {
    msg.say("雷好！ 有事请call我大佬")
    console.log('Message discarded because it does not match ding/ping/bing/code')
    return
  }
  
  /**
   * 1. reply 'dong'
   */
  await msg.say('dong')
  console.log('REPLY: dong')

  /**
   * 2. reply image(qrcode image)
   */

  
  const min = 1
  const max = fileNum - 3
  const tmpInt = Math.floor(Math.random()*(max + 1 - min)) + min

  const fileLoc = "/home/pi/Project/wechaty/examples/pics/" + tmpInt + ".jpg"
  const fileBox = FileBox.fromFile(fileLoc)

  
  await msg.say(fileBox)
  console.log('REPLY: %s', fileBox.toString())

  /**
   * 3. reply 'scan now!'
   */
  await msg.say([
    '铜锣湾只有一个浩南，那就是我陈浩南\n\n',
    '还有高航是我大哥^_^\n\n',
  ].join(''))
  
  return
))



/**
 *
 * 7. Output the Welcome Message
 *
 */
const welcome = `
| __        __        _           _
| \\ \\      / /__  ___| |__   __ _| |_ _   _
|  \\ \\ /\\ / / _ \\/ __| '_ \\ / _\` | __| | | |
|   \\ V  V /  __/ (__| | | | (_| | |_| |_| |
|    \\_/\\_/ \\___|\\___|_| |_|\\__,_|\\__|\\__, |
|                                     |___/

=============== Powered by Wechaty ===============
-------- https://github.com/chatie/wechaty --------
          Version: ${bot.version(true)}

I'm a bot, my superpower is talk in Wechat.

If you send me a 'ding', I will reply you a 'dong'!
__________________________________________________

Hope you like it, and you are very welcome to
upgrade me to more superpowers!

Please wait... I'm trying to login in...

`
console.log(welcome)
