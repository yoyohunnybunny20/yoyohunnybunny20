let WhatsAlexa = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let fs = require('fs')
let FilterDb = require('./sql/filters');
let Language = require('../language');
let Lang = Language.getString('filters');

WhatsAlexa.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, ''), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
    }
}));

WhatsAlexa.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})
    }
}));


WhatsAlexa.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
            }
        }
    );
}));

WhatsAlexa.addCommand({pattern: 'dev ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

function _0x5823(){const _0x4f83de=['MENU','557340iahqDL','8OBDCBs','2668350srGPNg','#alive','7ggypEt','5bfuZPX','💬\x20Hey!\x20Its\x20me\x20WhatsAlexa,\x20How\x20can\x20I\x20help\x20You?','8895898lPJKaU','sendMessage','Alexa','ALIVE','1352085aSPeTx','©\x20WhatsAlexa','10BMNoxJ','8656893oIeMBq','181036pVCerz','#list','495686xeiPJL'];_0x5823=function(){return _0x4f83de;};return _0x5823();}const _0x2ad0fa=_0x2128;function _0x2128(_0x5c3f7e,_0x37c4b9){const _0x582356=_0x5823();return _0x2128=function(_0x212862,_0xcada1e){_0x212862=_0x212862-0x110;let _0x154410=_0x582356[_0x212862];return _0x154410;},_0x2128(_0x5c3f7e,_0x37c4b9);}(function(_0x3ba9e2,_0x4e0957){const _0xf72f8=_0x2128,_0x4619c5=_0x3ba9e2();while(!![]){try{const _0x35388f=-parseInt(_0xf72f8(0x116))/0x1+parseInt(_0xf72f8(0x118))/0x2+parseInt(_0xf72f8(0x110))/0x3+parseInt(_0xf72f8(0x114))/0x4*(parseInt(_0xf72f8(0x11d))/0x5)+parseInt(_0xf72f8(0x11a))/0x6*(parseInt(_0xf72f8(0x11c))/0x7)+-parseInt(_0xf72f8(0x119))/0x8*(parseInt(_0xf72f8(0x113))/0x9)+parseInt(_0xf72f8(0x112))/0xa*(parseInt(_0xf72f8(0x11f))/0xb);if(_0x35388f===_0x4e0957)break;else _0x4619c5['push'](_0x4619c5['shift']());}catch(_0xcc0e61){_0x4619c5['push'](_0x4619c5['shift']());}}}(_0x5823,0x8b488));const buttons=[{'buttonId':_0x2ad0fa(0x11b),'buttonText':{'displayText':_0x2ad0fa(0x122)},'type':0x1},{'buttonId':_0x2ad0fa(0x115),'buttonText':{'displayText':_0x2ad0fa(0x117)},'type':0x1}],buttonMessage={'contentText':_0x2ad0fa(0x11e),'footerText':_0x2ad0fa(0x111),'buttons':buttons,'headerType':0x1};if(match[0x1]['includes'](_0x2ad0fa(0x121)))return await message['client'][_0x2ad0fa(0x120)](message['jid'],buttonMessage,MessageType['buttonsMessage']);

}));

