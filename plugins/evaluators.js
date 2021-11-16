let WhatsAlexa = require('../events');
let Config = require('../config');
let {MessageType} = require('@adiwajshing/baileys');
let exec = require('child_process').exec;
let os = require("os");
let fs = require('fs');
let heroku = require('heroku-client');
let Language = require('../language');
let Lang = Language.getString('evaluators');

WhatsAlexa.addCommand({pattern: 'pmsend ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
    if (message.reply_message && match[1] == '') return await message.client.sendMessage(message.jid, Lang.NEED_WORDS, MessageType.text);
    let uspm = message.reply_message.jid
    await message.client.sendMessage(uspm, match[1], MessageType.text);
    await message.client.sendMessage(message.jid, Lang.SUC_PMS, MessageType.text);
}));
