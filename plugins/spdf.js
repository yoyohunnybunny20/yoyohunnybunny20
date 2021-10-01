let WhatsAlexa = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let request = require('request');
let got = require("got");
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('unvoice');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'spdf ?(.*)', fromMe: true, desc: Lang.SPDF_DESC }, (async (message, match) => {

    var _0x39644c=_0x2eee;(function(_0x11953e,_0x57f3b1){var _0x5cfb5e=_0x2eee,_0x20bbae=_0x11953e();while(!![]){try{var _0x2d0e11=-parseInt(_0x5cfb5e(0xae))/0x1+parseInt(_0x5cfb5e(0xad))/0x2+parseInt(_0x5cfb5e(0xac))/0x3*(parseInt(_0x5cfb5e(0xbd))/0x4)+parseInt(_0x5cfb5e(0xb8))/0x5*(parseInt(_0x5cfb5e(0xbc))/0x6)+-parseInt(_0x5cfb5e(0xb7))/0x7+parseInt(_0x5cfb5e(0xb1))/0x8*(-parseInt(_0x5cfb5e(0xba))/0x9)+parseInt(_0x5cfb5e(0xb4))/0xa*(parseInt(_0x5cfb5e(0xbb))/0xb);if(_0x2d0e11===_0x57f3b1)break;else _0x20bbae['push'](_0x20bbae['shift']());}catch(_0x1b2abd){_0x20bbae['push'](_0x20bbae['shift']());}}}(_0x5e91,0x3bbb4));if(match[0x1]==='')return await message[_0x39644c(0xb0)][_0x39644c(0xb6)](message[_0x39644c(0xaa)],Lang['SPDF_LINK'],MessageType[_0x39644c(0xb2)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']});function _0x5e91(){var _0x3e923d=['sendMessage','2491797TQyxPz','1278265gtGXYG','SPDF_PROC','3447eviRAd','22HafrSo','6YAEnnv','4UieeNP','data','&apiKey=','jid','WhatsAlexa.pdf','998502keGNiE','210326ILrEkE','155542fELjcj','arraybuffer','client','6056ceufvf','text','from','1762270DIjfUE','https://api.html2pdf.app/v1/generate?url='];_0x5e91=function(){return _0x3e923d;};return _0x5e91();}function _0x2eee(_0x5adbec,_0xaa65d5){var _0x5e91ea=_0x5e91();return _0x2eee=function(_0x2eeece,_0x4865a4){_0x2eeece=_0x2eeece-0xa8;var _0x4d513d=_0x5e91ea[_0x2eeece];return _0x4d513d;},_0x2eee(_0x5adbec,_0xaa65d5);}var webimage=await axios['get'](_0x39644c(0xb5)+match[0x1]+_0x39644c(0xa9)+Config['SPDF_API'],{'responseType':_0x39644c(0xaf)});await message[_0x39644c(0xb0)][_0x39644c(0xb6)](message['jid'],Lang[_0x39644c(0xb9)],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x39644c(0xa8)]}),await message[_0x39644c(0xb6)](Buffer[_0x39644c(0xb3)](webimage[_0x39644c(0xa8)]),MessageType['document'],{'mimetype':Mimetype['pdf'],'filename':_0x39644c(0xab),'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x39644c(0xa8)]});

    }));  
}
else if (Config.WORKTYPE == 'public') {

    WhatsAlexa.addCommand({pattern: 'spdf ?(.*)', fromMe: false, desc: Lang.SPDF_DESC }, (async (message, match) => {

    var _0x39644c=_0x2eee;(function(_0x11953e,_0x57f3b1){var _0x5cfb5e=_0x2eee,_0x20bbae=_0x11953e();while(!![]){try{var _0x2d0e11=-parseInt(_0x5cfb5e(0xae))/0x1+parseInt(_0x5cfb5e(0xad))/0x2+parseInt(_0x5cfb5e(0xac))/0x3*(parseInt(_0x5cfb5e(0xbd))/0x4)+parseInt(_0x5cfb5e(0xb8))/0x5*(parseInt(_0x5cfb5e(0xbc))/0x6)+-parseInt(_0x5cfb5e(0xb7))/0x7+parseInt(_0x5cfb5e(0xb1))/0x8*(-parseInt(_0x5cfb5e(0xba))/0x9)+parseInt(_0x5cfb5e(0xb4))/0xa*(parseInt(_0x5cfb5e(0xbb))/0xb);if(_0x2d0e11===_0x57f3b1)break;else _0x20bbae['push'](_0x20bbae['shift']());}catch(_0x1b2abd){_0x20bbae['push'](_0x20bbae['shift']());}}}(_0x5e91,0x3bbb4));if(match[0x1]==='')return await message[_0x39644c(0xb0)][_0x39644c(0xb6)](message[_0x39644c(0xaa)],Lang['SPDF_LINK'],MessageType[_0x39644c(0xb2)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']});function _0x5e91(){var _0x3e923d=['sendMessage','2491797TQyxPz','1278265gtGXYG','SPDF_PROC','3447eviRAd','22HafrSo','6YAEnnv','4UieeNP','data','&apiKey=','jid','WhatsAlexa.pdf','998502keGNiE','210326ILrEkE','155542fELjcj','arraybuffer','client','6056ceufvf','text','from','1762270DIjfUE','https://api.html2pdf.app/v1/generate?url='];_0x5e91=function(){return _0x3e923d;};return _0x5e91();}function _0x2eee(_0x5adbec,_0xaa65d5){var _0x5e91ea=_0x5e91();return _0x2eee=function(_0x2eeece,_0x4865a4){_0x2eeece=_0x2eeece-0xa8;var _0x4d513d=_0x5e91ea[_0x2eeece];return _0x4d513d;},_0x2eee(_0x5adbec,_0xaa65d5);}var webimage=await axios['get'](_0x39644c(0xb5)+match[0x1]+_0x39644c(0xa9)+Config['SPDF_API'],{'responseType':_0x39644c(0xaf)});await message[_0x39644c(0xb0)][_0x39644c(0xb6)](message['jid'],Lang[_0x39644c(0xb9)],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x39644c(0xa8)]}),await message[_0x39644c(0xb6)](Buffer[_0x39644c(0xb3)](webimage[_0x39644c(0xa8)]),MessageType['document'],{'mimetype':Mimetype['pdf'],'filename':_0x39644c(0xab),'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x39644c(0xa8)]});

    }));    
}
