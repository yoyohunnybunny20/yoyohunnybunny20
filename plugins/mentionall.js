let WhatsAlexa = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let Language = require('../language');
let Config = require('../config');
let TLang = Language.getString('tagall');
let Lang = Language.getString('admin');

WhatsAlexa.addCommand({pattern: 'mentionall', fromMe: true, desc: TLang.TAGALL_DESC}, (async (message, match) => {
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.ADMİN,MessageType.text);

    if (!message.reply_message) {
        if (match[1] !== '') {
            grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(
                async (uye) => {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            );
            await message.client.sendMessage(message.jid,`${match[1]}`, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        }
        else if (match[1] == '') {
            grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(
                async (uye) => {
                    mesaj += '▫️ @' + uye.id.split('@')[0] + '\n';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            );
            await message.client.sendMessage(message.jid,mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        }
    }
    else if (message.reply_message) {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '@' + uye.id.split('@')[0] + ' ';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        var tx = message.reply_message.text
        await message.client.sendMessage(message.jid,tx, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
}));
