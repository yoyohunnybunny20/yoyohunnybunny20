let WhatsAlexa = require('../events');
let Config = require('../config');
let {MessageType} = require('@adiwajshing/baileys');
let tesseract = require("node-tesseract-ocr")
let langs = require('langs');

var ocrdesc = ''
var needreply = ''
var reading = ''
var err = ''
var res = ''
if (Config.LANG == 'EN') ocrdesc = "Reads the text on the photo you have replied.", needreply = "*You must Reply to a photo!*", reading = "```Media is downloading & reading...```", err = "```I couldn't read this 😖```\n*Error:*```{}```", res = "*Language:* ```{}```\n*Here is what I read:* ```{}```"
if (Config.LANG == 'ML') ocrdesc = 'നിങ്ങൾ മറുപടി നൽകിയ ഫോട്ടോയിലെ വാചകം വായിക്കുന്നു.', needreply = '*നിങ്ങൾ ഒരു ഫോട്ടോയ്ക്ക് മറുപടി നൽകണം!*', reading = '```മീഡിയ ഡൗൺലോഡ് ചെയ്യുകയും വായിക്കുകയും ചെയ്യുന്നു...```', err = '```എനിക്ക് ഇത് വായിക്കാൻ കഴിഞ്ഞില്ല 😖```\n*പിശക്:*```{}```', res = '*ഭാഷ:* ```{}```\n*ഞാൻ വായിച്ചത് ഇതാ:* ```{}```'
if (Config.LANG == 'ID') ocrdesc = 'Membaca teks pada foto yang telah Anda balas.', needreply = '*Anda harus Membalas foto!*', reading = '```Media sedang mengunduh & membaca...```', err = '```Saya tidak bisa membaca ini 😖```\n*Error:*```{}```', res = '*Bahasa:* ```{}```\n*Inilah yang saya baca:* ```{}```'

const Lang = {
      OCR_DESC = ocrdesc,
      NEED_REPLY = needreply,
      DOWNLOADING = reading,
      ERROR = err,
      RESULT = res
    }


if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'read ?(.*)', fromMe: true, desc: Lang.OCR_DESC}, (async (message, match) => { 

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);    
	var info = await message.reply(Lang.DOWNLOADING);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        var dil;
        if (match[1] !== '') {
            dil = langs.where("1", match[1]);
        } else {
            dil = langs.where("1", Config.LANG.toLowerCase());
        }

        try {
            var result = await tesseract.recognize(location, {
                lang: dil[2]
            });    
        } catch (e) {
            return await message.reply(Lang.ERROR.format(e));
        }

        await info.delete();
        if ( result === ' ' || result.length == 1 ) {
            return await message.reply(Lang.ERROR.format(' Empty text'));
        }

        return await message.reply(Lang.RESULT.format(dil[2], result));
    }));
}
else if (Config.WORKTYPE == 'public') {

    WhatsAlexa.addCommand({pattern: 'read ?(.*)', fromMe: false, desc: Lang.OCR_DESC}, (async (message, match) => { 

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);    
	var info = await message.reply(Lang.DOWNLOADING);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        var dil;
        if (match[1] !== '') {
            dil = langs.where("1", match[1]);
        } else {
            dil = langs.where("1", Config.LANG.toLowerCase());
        }

        try {
            var result = await tesseract.recognize(location, {
                lang: dil[2]
            });    
        } catch (e) {
            return await message.reply(Lang.ERROR.format(e));
        }

        await info.delete();
        if ( result === ' ' || result.length == 1 ) {
            return await message.reply(Lang.ERROR.format(' Empty text'));
        }

        return await message.reply(Lang.RESULT.format(dil[2], result));
    }));
}
