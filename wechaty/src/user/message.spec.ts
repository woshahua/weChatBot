#!/usr/bin/env ts-node
/**
 *   Wechaty - https://github.com/chatie/wechaty
 *
 *   @copyright 2016-2018 Huan LI <zixia@zixia.net>
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */

// tslint:disable:no-shadowed-variable
// tslint:disable:max-classes-per-file
// tslint:disable:arrow-parens
// tslint:disable:ter-no-irregular-whitespace
// tslint:disable:max-line-length

// import test  from 'blue-tape'
// import sinon from 'sinon'

// import { PuppetMock } from 'wechaty-puppet-mock'

// import {
//   MessagePayload,
//   MessageType,
// }                   from 'wechaty-puppet'

// import { Wechaty }  from '../wechaty'

// class PuppetMockTest extends PuppetMock {
//   public login(id: string) {
//     return super.login(id)
//   }
// }
// test('self()', async t => {
//   const puppet  = new PuppetMockTest()
//   // const wechaty = new WechatyTest({ puppet })
//   // wechaty.initPuppetAccessory(puppet)

//   const MOCK_USER_ID = 'TEST-USER-ID'

//   const sandbox = sinon.createSandbox()

//   // const MOCK_CONTACT = wechaty.Contact.load(MOCK_USER_ID)

//   function mockMessagePayload () {
//     const payload: MessagePayload = {
//       fromId    : MOCK_USER_ID,
//       id        : 'id',
//       timestamp : Date.now(),
//       toId      : 'to_id',
//       type      : MessageType.Text,
//     }
//     return payload
//   }

//   sandbox.stub(puppet, 'messagePayload').callsFake(mockMessagePayload)
//   sandbox.stub(puppet, 'messagePayloadCache').callsFake(mockMessagePayload)

//   sandbox.stub(puppet, 'messageRawPayload').resolves({})

//   sandbox.stub(puppet, 'roomPayload').resolves({})
//   sandbox.stub(puppet, 'roomPayloadCache').returns({})

//   sandbox.stub(puppet, 'contactPayload').resolves({})
//   sandbox.stub(puppet, 'contactPayloadCache').returns({})

//   const selfIdStub = sandbox.stub(puppet, 'selfId').returns(MOCK_USER_ID)

//   await puppet.login(MOCK_USER_ID)

//   const selfMsg = wechaty.Message.create('xxx')
//   await selfMsg.ready()

//   t.true(selfMsg.self(), 'should identify self message true where message from MOCK_CONTACT')

//   selfIdStub.restore()
//   sandbox.stub(puppet, 'selfId').returns('fadsfasdfasdfasfas')

//   const otherMsg = wechaty.Message.create('xxx')
//   await otherMsg.ready()

//   t.false(otherMsg.self(), 'should identify self message false when from a different fromId')

//   sandbox.restore()
// })

// test('mentioned()', async t => {
//
//   const rawPayload11: WebMessageRawPayload = JSON.parse(`{"MsgId":"6475340302153501409","FromUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","ToUserName":"@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2","MsgType":1,"Content":"@4c32c97337cbb325442c304d6a44e374:<br/>@_@","Status":3,"ImgStatus":1,"CreateTime":1489823176,"VoiceLength":0,"PlayLength":0,"FileName":"","FileSize":"","MediaId":"","Url":"","AppMsgType":0,"StatusNotifyCode":0,"StatusNotifyUserName":"","RecommendInfo":{"UserName":"","NickName":"","QQNum":0,"Province":"","City":"","Content":"","Signature":"","Alias":"","Scene":0,"VerifyFlag":0,"AttrStatus":0,"Sex":0,"Ticket":"","OpCode":0},"ForwardFlag":0,"AppInfo":{"AppID":"","Type":0},"HasProductId":0,"Ticket":"","ImgHeight":0,"ImgWidth":0,"SubMsgType":0,"NewMsgId":6475340302153502000,"OriContent":"","MMPeerUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","MMDigest":"22acb030-ff09-11e6-8a73-cff62d9268c5:@_@","MMIsSend":false,"MMIsChatRoom":true,"MMUnread":true,"LocalID":"6475340302153501409","ClientMsgId":"6475340302153501409","MMActualContent":"@_@","MMActualSender":"@4c32c97337cbb325442c304d6a44e374","MMDigestTime":"15:46","MMDisplayTime":1489823176,"MMTime":"15:46"}`)

//   const rawPayload12: WebMessageRawPayload = JSON.parse(`{"MsgId":"3670467504370401673","FromUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","ToUserName":"@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2","MsgType":1,"Content":"@4c32c97337cbb325442c304d6a44e374:<br/>user@email.com","Status":3,"ImgStatus":1,"CreateTime":1489823281,"VoiceLength":0,"PlayLength":0,"FileName":"","FileSize":"","MediaId":"","Url":"","AppMsgType":0,"StatusNotifyCode":0,"StatusNotifyUserName":"","RecommendInfo":{"UserName":"","NickName":"","QQNum":0,"Province":"","City":"","Content":"","Signature":"","Alias":"","Scene":0,"VerifyFlag":0,"AttrStatus":0,"Sex":0,"Ticket":"","OpCode":0},"ForwardFlag":0,"AppInfo":{"AppID":"","Type":0},"HasProductId":0,"Ticket":"","ImgHeight":0,"ImgWidth":0,"SubMsgType":0,"NewMsgId":3670467504370402000,"OriContent":"","MMPeerUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","MMDigest":"22acb030-ff09-11e6-8a73-cff62d9268c5:user@email.com","MMIsSend":false,"MMIsChatRoom":true,"MMUnread":true,"LocalID":"3670467504370401673","ClientMsgId":"3670467504370401673","MMActualContent":"<a target=\'_blank\' href=\'/cgi-bin/mmwebwx-bin/webwxcheckurl?requrl=http%3A%2F%2Fuser%40email.com&skey=%40crypt_ee003aea_5265cdd0c2676aab3df86b0249ae90f7&deviceid=e982718209172853&pass_ticket=undefined&opcode=2&scene=1&username=@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2\'>user@email.com</a>","MMActualSender":"@4c32c97337cbb325442c304d6a44e374","MMDigestTime":"15:48","MMDisplayTime":1489823176,"MMTime":""}`)

//   const rawPayload13: WebMessageRawPayload = JSON.parse(`{"MsgId":"6796857876930585020","FromUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","ToUserName":"@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2","MsgType":1,"Content":"@4c32c97337cbb325442c304d6a44e374:<br/>@_@ wow! my email is ruiruibupt@gmail.com","Status":3,"ImgStatus":1,"CreateTime":1489823387,"VoiceLength":0,"PlayLength":0,"FileName":"","FileSize":"","MediaId":"","Url":"","AppMsgType":0,"StatusNotifyCode":0,"StatusNotifyUserName":"","RecommendInfo":{"UserName":"","NickName":"","QQNum":0,"Province":"","City":"","Content":"","Signature":"","Alias":"","Scene":0,"VerifyFlag":0,"AttrStatus":0,"Sex":0,"Ticket":"","OpCode":0},"ForwardFlag":0,"AppInfo":{"AppID":"","Type":0},"HasProductId":0,"Ticket":"","ImgHeight":0,"ImgWidth":0,"SubMsgType":0,"NewMsgId":6796857876930585000,"OriContent":"","MMPeerUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","MMDigest":"22acb030-ff09-11e6-8a73-cff62d9268c5:@_@ wow! my email is ruiruibupt@gmail.com","MMIsSend":false,"MMIsChatRoom":true,"MMUnread":true,"LocalID":"6796857876930585020","ClientMsgId":"6796857876930585020","MMActualContent":"@_@ wow! my email is<a target=\'_blank\' href=\'/cgi-bin/mmwebwx-bin/webwxcheckurl?requrl=http%3A%2F%2Fruiruibupt%40gmail.com&skey=%40crypt_ee003aea_5265cdd0c2676aab3df86b0249ae90f7&deviceid=e982718209172853&pass_ticket=undefined&opcode=2&scene=1&username=@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2\'> ruiruibupt@gmail.com</a>","MMActualSender":"@4c32c97337cbb325442c304d6a44e374","MMDigestTime":"15:49","MMDisplayTime":1489823387,"MMTime":"15:49"}`)

//   const rawPayload21: WebMessageRawPayload = JSON.parse(`{"MsgId":"2661793617819734017","FromUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","ToUserName":"@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2","MsgType":1,"Content":"@4c32c97337cbb325442c304d6a44e374:<br/>@小桔同学 你好啊","Status":3,"ImgStatus":1,"CreateTime":1489823541,"VoiceLength":0,"PlayLength":0,"FileName":"","FileSize":"","MediaId":"","Url":"","AppMsgType":0,"StatusNotifyCode":0,"StatusNotifyUserName":"","RecommendInfo":{"UserName":"","NickName":"","QQNum":0,"Province":"","City":"","Content":"","Signature":"","Alias":"","Scene":0,"VerifyFlag":0,"AttrStatus":0,"Sex":0,"Ticket":"","OpCode":0},"ForwardFlag":0,"AppInfo":{"AppID":"","Type":0},"HasProductId":0,"Ticket":"","ImgHeight":0,"ImgWidth":0,"SubMsgType":0,"NewMsgId":2661793617819734000,"OriContent":"","MMPeerUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","MMDigest":"22acb030-ff09-11e6-8a73-cff62d9268c5:@小桔同学 你好啊","MMIsSend":false,"MMIsChatRoom":true,"MMUnread":true,"LocalID":"2661793617819734017","ClientMsgId":"2661793617819734017","MMActualContent":"@小桔同学 你好啊","MMActualSender":"@4c32c97337cbb325442c304d6a44e374","MMDigestTime":"15:52","MMDisplayTime":1489823387,"MMTime":""}`)

//   const rawPayload22: WebMessageRawPayload = JSON.parse(`{"MsgId":"5278536998175085820","FromUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","ToUserName":"@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2","MsgType":1,"Content":"@4c32c97337cbb325442c304d6a44e374:<br/>@wuli舞哩客服 和@小桔同学 是好朋友","Status":3,"ImgStatus":1,"CreateTime":1489823598,"VoiceLength":0,"PlayLength":0,"FileName":"","FileSize":"","MediaId":"","Url":"","AppMsgType":0,"StatusNotifyCode":0,"StatusNotifyUserName":"","RecommendInfo":{"UserName":"","NickName":"","QQNum":0,"Province":"","City":"","Content":"","Signature":"","Alias":"","Scene":0,"VerifyFlag":0,"AttrStatus":0,"Sex":0,"Ticket":"","OpCode":0},"ForwardFlag":0,"AppInfo":{"AppID":"","Type":0},"HasProductId":0,"Ticket":"","ImgHeight":0,"ImgWidth":0,"SubMsgType":0,"NewMsgId":5278536998175086000,"OriContent":"","MMPeerUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","MMDigest":"22acb030-ff09-11e6-8a73-cff62d9268c5:@wuli舞哩客服 和@小桔同学 是好朋友","MMIsSend":false,"MMIsChatRoom":true,"MMUnread":true,"LocalID":"5278536998175085820","ClientMsgId":"5278536998175085820","MMActualContent":"@wuli舞哩客服 和@小桔同学 是好朋友","MMActualSender":"@4c32c97337cbb325442c304d6a44e374","MMDigestTime":"15:53","MMDisplayTime":1489823598,"MMTime":"15:53"}`)

//   const rawPayload31: WebMessageRawPayload = JSON.parse(`{"MsgId":"7410792097315403535","FromUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","ToUserName":"@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2","MsgType":1,"Content":"@4c32c97337cbb325442c304d6a44e374:<br/>@wuli舞哩客服 我的邮箱是 ruiruibupt@gmail.com","Status":3,"ImgStatus":1,"CreateTime":1489823684,"VoiceLength":0,"PlayLength":0,"FileName":"","FileSize":"","MediaId":"","Url":"","AppMsgType":0,"StatusNotifyCode":0,"StatusNotifyUserName":"","RecommendInfo":{"UserName":"","NickName":"","QQNum":0,"Province":"","City":"","Content":"","Signature":"","Alias":"","Scene":0,"VerifyFlag":0,"AttrStatus":0,"Sex":0,"Ticket":"","OpCode":0},"ForwardFlag":0,"AppInfo":{"AppID":"","Type":0},"HasProductId":0,"Ticket":"","ImgHeight":0,"ImgWidth":0,"SubMsgType":0,"NewMsgId":7410792097315404000,"OriContent":"","MMPeerUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","MMDigest":"22acb030-ff09-11e6-8a73-cff62d9268c5:@wuli舞哩客服 我的邮箱是 ruiruibupt@gmail.com","MMIsSend":false,"MMIsChatRoom":true,"MMUnread":true,"LocalID":"7410792097315403535","ClientMsgId":"7410792097315403535","MMActualContent":"@wuli舞哩客服 我的邮箱是<a target=\'_blank\' href=\'/cgi-bin/mmwebwx-bin/webwxcheckurl?requrl=http%3A%2F%2Fruiruibupt%40gmail.com&skey=%40crypt_ee003aea_5265cdd0c2676aab3df86b0249ae90f7&deviceid=e982718209172853&pass_ticket=undefined&opcode=2&scene=1&username=@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2\'> ruiruibupt@gmail.com</a>","MMActualSender":"@4c32c97337cbb325442c304d6a44e374","MMDigestTime":"15:54","MMDisplayTime":1489823598,"MMTime":""}`)

//   const rawPayload32: WebMessageRawPayload = JSON.parse(`{"MsgId":"3807714644369652210","FromUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","ToUserName":"@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2","MsgType":1,"Content":"@4c32c97337cbb325442c304d6a44e374:<br/>@_@ wow，@wuli舞哩客服 和@小桔同学 看起来很有默契","Status":3,"ImgStatus":1,"CreateTime":1489823764,"VoiceLength":0,"PlayLength":0,"FileName":"","FileSize":"","MediaId":"","Url":"","AppMsgType":0,"StatusNotifyCode":0,"StatusNotifyUserName":"","RecommendInfo":{"UserName":"","NickName":"","QQNum":0,"Province":"","City":"","Content":"","Signature":"","Alias":"","Scene":0,"VerifyFlag":0,"AttrStatus":0,"Sex":0,"Ticket":"","OpCode":0},"ForwardFlag":0,"AppInfo":{"AppID":"","Type":0},"HasProductId":0,"Ticket":"","ImgHeight":0,"ImgWidth":0,"SubMsgType":0,"NewMsgId":3807714644369652000,"OriContent":"","MMPeerUserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","MMDigest":"22acb030-ff09-11e6-8a73-cff62d9268c5:@_@ wow，@wuli舞哩客服 和@小桔同学 看起来很有默契","MMIsSend":false,"MMIsChatRoom":true,"MMUnread":true,"LocalID":"3807714644369652210","ClientMsgId":"3807714644369652210","MMActualContent":"@_@ wow，@wuli舞哩客服 和@小桔同学 看起来很有默契","MMActualSender":"@4c32c97337cbb325442c304d6a44e374","MMDigestTime":"15:56","MMDisplayTime":1489823598,"MMTime":""}`)

//   const ROOM_RAW_PAYLOAD: WebRoomRawPayload = JSON.parse(`{"RemarkPYQuanPin":"22acb030ff0911e68a73cff62d9268c5","RemarkPYInitial":"22ACB030FF0911E68A73CFF62D9268C5","PYInitial":"","PYQuanPin":"","Uin":0,"UserName":"@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4","NickName":"付费入群","HeadImgUrl":"/cgi-bin/mmwebwx-bin/webwxgetheadimg?seq=670397504&username=@@e2355db381dc46a77c0b95516d05e7486135cb6370d8a6af66925d89d50ec278&skey=","ContactFlag":2,"MemberCount":146,"MemberList":[{"Alias":"ruirui_0914","AppAccountFlag":0,"AttrStatus":2147584103,"ChatRoomId":0,"City":"海淀","ContactFlag":3,"DisplayName":"","EncryChatRoomId":"","HeadImgUrl":"/cgi-bin/mmwebwx-bin/webwxgeticon?seq=648035215&username=@4c32c97337cbb325442c304d6a44e374&skey=@crypt_ee003aea_5265cdd0c2676aab3df86b0249ae90f7","HideInputBarFlag":0,"IsOwner":0,"KeyWord":"qq5","MMOrderSymbol":"~","MemberCount":0,"MemberList":[],"NickName":"李佳芮","OwnerUin":0,"PYInitial":"LJR","PYQuanPin":"lijiarui","Province":"北京","RemarkName":"22acb030-ff09-11e6-8a73-cff62d9268c5","RemarkPYInitial":"22ACB030FF0911E68A73CFF62D9268C5","RemarkPYQuanPin":"22acb030ff0911e68a73cff62d9268c5","Sex":2,"Signature":"出洞计划  |  向前一步","SnsFlag":49,"StarFriend":0,"Statues":0,"Uin":0,"UniFriend":0,"UserName":"@4c32c97337cbb325442c304d6a44e374","VerifyFlag":0,"_h":50,"_index":16,"_offsetTop":696,"stranger":false},{"AppAccountFlag":0,"ContactFlag":0,"HeadImgFlag":1,"HeadImgUrl":"/cgi-bin/mmwebwx-bin/webwxgeticon?seq=665886775&username=@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2&skey=@crypt_ee003aea_5265cdd0c2676aab3df86b0249ae90f7","HideInputBarFlag":0,"MMOrderSymbol":"~","NickName":"小桔同学","PYInitial":"","PYQuanPin":"","RemarkName":"","RemarkPYInitial":"","RemarkPYQuanPin":"","Sex":0,"Signature":"我是一个性感的机器人","SnsFlag":1,"StarFriend":0,"Uin":244009576,"UserName":"@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2","VerifyFlag":0,"WebWxPluginSwitch":0,"stranger":false},{"$$hashKey":"01J","Alias":"dancewuli","AppAccountFlag":0,"AttrStatus":233509,"ChatRoomId":0,"City":"","ContactFlag":3,"DisplayName":"","EncryChatRoomId":"","HeadImgUrl":"/cgi-bin/mmwebwx-bin/webwxgeticon?seq=635310858&username=@36d55130f6a91bae4a2ed2cc5f19c56a9258c65ce3db9777f74f607223ef0855&skey=@crypt_ee003aea_5265cdd0c2676aab3df86b0249ae90f7","HideInputBarFlag":0,"IsOwner":0,"KeyWord":"","MMOrderSymbol":"~","MemberCount":0,"MemberList":[],"NickName":"wuli舞哩客服","OwnerUin":0,"PYInitial":"WULIWLKF","PYQuanPin":"wuliwulikefu","Province":"","RemarkName":"50fb16c0-ff09-11e6-9fe5-dda97284d25b","RemarkPYInitial":"50FB16C0FF0911E69FE5DDA97284D25B","RemarkPYQuanPin":"50fb16c0ff0911e69fe5dda97284d25b","Sex":0,"Signature":"","SnsFlag":1,"StarFriend":0,"Statues":0,"Uin":0,"UniFriend":0,"UserName":"@36d55130f6a91bae4a2ed2cc5f19c56a9258c65ce3db9777f74f607223ef0855","VerifyFlag":0,"_h":50,"_index":10,"_offsetTop":396,"stranger":false}],"RemarkName":"","HideInputBarFlag":0,"Sex":0,"Signature":"","VerifyFlag":0,"OwnerUin":2351423900,"StarFriend":0,"AppAccountFlag":0,"Statues":0,"AttrStatus":0,"Province":"","City":"","Alias":"","SnsFlag":0,"UniFriend":0,"DisplayName":"","ChatRoomId":0,"KeyWord":"","MMFromBatchGet":true,"MMFromBatchget":true,"MMInChatroom":true}`)

//   const CONTACT_RAW_PAYLOAD_DICT = JSON.parse(`{"@4c32c97337cbb325442c304d6a44e374":{"Alias":"ruirui_0914","AppAccountFlag":0,"AttrStatus":2147584103,"ChatRoomId":0,"City":"海淀","ContactFlag":3,"DisplayName":"","EncryChatRoomId":"","HeadImgUrl":"/cgi-bin/mmwebwx-bin/webwxgeticon?seq=648035215&username=@4c32c97337cbb325442c304d6a44e374&skey=@crypt_ee003aea_5265cdd0c2676aab3df86b0249ae90f7","HideInputBarFlag":0,"IsOwner":0,"KeyWord":"qq5","MMOrderSymbol":"~","MemberCount":0,"MemberList":[],"NickName":"李佳芮","OwnerUin":0,"PYInitial":"LJR","PYQuanPin":"lijiarui","Province":"北京","RemarkName":"22acb030-ff09-11e6-8a73-cff62d9268c5","RemarkPYInitial":"22ACB030FF0911E68A73CFF62D9268C5","RemarkPYQuanPin":"22acb030ff0911e68a73cff62d9268c5","Sex":2,"Signature":"出洞计划  |  向前一步","SnsFlag":49,"StarFriend":0,"Statues":0,"Uin":0,"UniFriend":0,"UserName":"@4c32c97337cbb325442c304d6a44e374","VerifyFlag":0,"_h":50,"_index":16,"_offsetTop":696,"stranger":false},"@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2":{"AppAccountFlag":0,"ContactFlag":0,"HeadImgFlag":1,"HeadImgUrl":"/cgi-bin/mmwebwx-bin/webwxgeticon?seq=665886775&username=@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2&skey=@crypt_ee003aea_5265cdd0c2676aab3df86b0249ae90f7","HideInputBarFlag":0,"MMOrderSymbol":"~","NickName":"小桔同学","PYInitial":"","PYQuanPin":"","RemarkName":"","RemarkPYInitial":"","RemarkPYQuanPin":"","Sex":0,"Signature":"我是一个性感的机器人","SnsFlag":1,"StarFriend":0,"Uin":244009576,"UserName":"@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2","VerifyFlag":0,"WebWxPluginSwitch":0,"stranger":false},"@36d55130f6a91bae4a2ed2cc5f19c56a9258c65ce3db9777f74f607223ef0855":{"$$hashKey":"01J","Alias":"dancewuli","AppAccountFlag":0,"AttrStatus":233509,"ChatRoomId":0,"City":"","ContactFlag":3,"DisplayName":"","EncryChatRoomId":"","HeadImgUrl":"/cgi-bin/mmwebwx-bin/webwxgeticon?seq=635310858&username=@36d55130f6a91bae4a2ed2cc5f19c56a9258c65ce3db9777f74f607223ef0855&skey=@crypt_ee003aea_5265cdd0c2676aab3df86b0249ae90f7","HideInputBarFlag":0,"IsOwner":0,"KeyWord":"","MMOrderSymbol":"~","MemberCount":0,"MemberList":[],"NickName":"wuli舞哩客服","OwnerUin":0,"PYInitial":"WULIWLKF","PYQuanPin":"wuliwulikefu","Province":"","RemarkName":"50fb16c0-ff09-11e6-9fe5-dda97284d25b","RemarkPYInitial":"50FB16C0FF0911E69FE5DDA97284D25B","RemarkPYQuanPin":"50fb16c0ff0911e69fe5dda97284d25b","Sex":0,"Signature":"","SnsFlag":1,"StarFriend":0,"Statues":0,"Uin":0,"UniFriend":0,"UserName":"@36d55130f6a91bae4a2ed2cc5f19c56a9258c65ce3db9777f74f607223ef0855","VerifyFlag":0,"_h":50,"_index":10,"_offsetTop":396,"stranger":false}}`)

//   const ROOM_ID = '@@9cdc696e490bd76c57e7dd54792dc1408e27d65e312178b1943e88579b7939f4'

//   // Mock
//   const mockContactRawPayload = (id: string) => {
//     log.silly('PuppeteerMessageTest', 'mockContactRawPayload(%s)', id)
//     return new Promise((resolve, reject) => {
//       if (id in CONTACT_RAW_PAYLOAD_DICT) {
//         const contactRawPayload = CONTACT_RAW_PAYLOAD_DICT[id]
//         setImmediate(() => resolve(contactRawPayload))
//       } else {
//         reject()
//       }
//     })
//   }

//   const mockRoomRawPayload = (id: string) => {
//     log.silly('PuppeteerMessageTest', 'mockRoomRawPayload(%s)', id)
//     return new Promise((resolve, reject) => {
//       if (id === ROOM_ID) {
//         resolve(ROOM_RAW_PAYLOAD)
//       } else {
//         reject()
//       }
//     })
//   }

//   const mockMessageRawPayload = (id: string) => {
//     log.silly('PuppeteerMessageTest', 'mockMessageRawPayload(%s)', id)
//     return new Promise((resolve, reject) => {
//       switch (id) {
//         case rawPayload11.MsgId:
//           return resolve(rawPayload11)
//         case rawPayload12.MsgId:
//           return resolve(rawPayload12)
//         case rawPayload13.MsgId:
//           return resolve(rawPayload13)
//         case rawPayload21.MsgId:
//           return resolve(rawPayload21)
//         case rawPayload22.MsgId:
//           return resolve(rawPayload22)
//         case rawPayload31.MsgId:
//           return resolve(rawPayload31)
//         case rawPayload32.MsgId:
//           return resolve(rawPayload32)
//         default:
//           return reject()
//       }
//     })
//   }

//   const sandbox = sinon.createSandbox()

//   const puppet = new PuppetPuppeteerTest()

//   const wechaty = new WechatyTest({ puppet })
//   wechaty.initPuppetAccessory(puppet)

//   sandbox.stub(puppet, 'contactRawPayload').callsFake(mockContactRawPayload)
//   sandbox.stub(puppet, 'roomRawPayload')   .callsFake(mockRoomRawPayload)
//   sandbox.stub(puppet, 'messageRawPayload').callsFake(mockMessageRawPayload)
//   sandbox.stub(puppet, 'id').value('pretend-to-be-logined')

//   const msg11 = wechaty.Message.create(rawPayload11.MsgId)
//   await msg11.ready()

//   const room11 = msg11.room()
//   if (room11) {
//     await room11.ready()
//     const mentionContactList11 = await msg11.mentioned()
//     t.is(mentionContactList11.length, 0, '@_@ in message should not be treat as contact')
//   }

//   const msg12 = wechaty.Message.create(rawPayload12.MsgId)
//   await msg12.ready()
//   const room12 = msg12.room()
//   if (room12) {
//     await room12.ready()
//     const mentionContactList12 = await msg12.mentioned()
//     t.is(mentionContactList12.length, 0, 'user@email.com in message should not be treat as contact')
//   }

//   const msg13 = wechaty.Message.create(rawPayload13.MsgId)
//   await msg13.ready()
//   const room13 = msg13.room()
//   if (room13) {
//     await room13.ready()
//     // setTimeout(function () {
//     const mentionContactList13 = await msg13.mentioned()
//     t.is(mentionContactList13.length, 0, '@_@ wow! my email is ruiruibupt@gmail.com in message should not be treat as contact')
//     // }, 1 * 1000)
//   }

//   const msg21 = wechaty.Message.create(rawPayload21.MsgId)
//   await msg21.ready()
//   const room21 = msg21.room()
//   if (room21) {
//     await room21.ready()
//     const mentionContactList21 = await msg21.mentioned()
//     t.is(mentionContactList21.length, 1, '@小桔同学 is a contact')
//     t.is(mentionContactList21[0].id, '@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2', 'should get 小桔同学 id right in rawPayload21')
//   }

//   const msg22 = wechaty.Message.create(rawPayload22.MsgId)
//   await msg22.ready()

//   const room22 = msg22.room()
//   if (room22) {
//     await room22.ready()
//     const mentionContactList22 = await msg22.mentioned()
//     t.is(mentionContactList22.length, 2, '@小桔同学 and @wuli舞哩客服 is a contact')
//     // not sure the rela serial
//     t.is(mentionContactList22[0].id, '@36d55130f6a91bae4a2ed2cc5f19c56a9258c65ce3db9777f74f607223ef0855', 'should get 小桔同学 id right in rawPayload22')
//     t.is(mentionContactList22[1].id, '@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2', 'should get wuli舞哩客服 id right in rawPayload22')
//   }

//   const msg31 = wechaty.Message.create(rawPayload31.MsgId)
//   await msg31.ready()

//   const room31 = msg31.room()
//   if (room31) {
//     await room31.ready()
//     const mentionContactList31 = await msg31.mentioned()
//     t.is(mentionContactList31.length, 1, '@wuli舞哩客服 is a contact')
//     t.is(mentionContactList31[0].id, '@36d55130f6a91bae4a2ed2cc5f19c56a9258c65ce3db9777f74f607223ef0855', 'should get wuli舞哩客服 id right in rawPayload31')
//   }

//   const msg32 = wechaty.Message.create(rawPayload32.MsgId)
//   await msg32.ready()

//   const room32 = msg32.room()
//   if (room32) {
//     await room32.ready()
//     const mentionContactList32 = await msg32.mentioned()
//     t.is(mentionContactList32.length, 2, '@小桔同学 and @wuli舞哩客服 is a contact')
//     t.is(mentionContactList32[0].id, '@36d55130f6a91bae4a2ed2cc5f19c56a9258c65ce3db9777f74f607223ef0855', 'should get wuli舞哩客服 id right in rawPayload32')
//     t.is(mentionContactList32[1].id, '@cd7d467d7464e8ff6b0acd29364654f3666df5d04551f6082bfc875f90a6afd2', 'should get 小桔同学 id right in rawPayload32')
//   }

//   sandbox.restore()
// })
