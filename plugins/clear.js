let {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let WhatsAlexa = require('../events');
let fs = require('fs');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('clear');

WhatsAlexa.addCommand({pattern: 'clear', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    await message.client.sendMessage(message.jid, Lang.CLR_PROC, MessageType.text);

    await message.client.modifyChat(message.jid, ChatModification.delete);

    await message.client.sendMessage(message.jid, Lang.CLR_DONE, MessageType.text);

}));
