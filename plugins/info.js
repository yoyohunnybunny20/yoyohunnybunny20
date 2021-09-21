let {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let WhatsAlexa = require('../events');
let fs = require('fs');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('ai');
let td = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'info', fromMe: td, desc: Lang.INFO_BOT}, (async (message, match) => {

var name = ''
var title = ''
var version = ''
var aut = ''
var branch = ''
var FU = ''
var TU = ''
var git = ''
var verified = ''
if (Config.LANG == 'EN') name = 'Name', title = 'Info Bot', version = 'Version', aut = 'Author & Developer', branch = 'Branch', verified = 'Official', FU = 'False ( Unofficial )', TO = 'True ( Official )', git = 'Git'
if (Config.LANG == 'ML') name = 'പേര്', title = 'ബോട്ട് വിവരങ്ങൾ', version = 'പതിപ്പ്', aut = 'രചയിതാവ് & ഡെവലപ്പർ', branch = 'ബ്രാഞ്ച്', verified = 'ഔദ്യോടികം', FU = 'തെറ്റായത് ( അനൗദ്യോഗിക )', TO = 'ശരിയായത് ( ഔദ്യോദ്യഗം )', git = 'ഗിറ്റ്'
if (Config.LANG == 'ID') name = 'Nama', title = 'Bot Informasi', version = 'Versi', aut = 'Penulis & Pengembang', branch = 'cabang', verified = 'resmi', FU = 'Salah ( Tidak Resmi )', TO = 'Benar ( Resmi )', git = 'Git'

    var official = ''
    if (Config.GIT.includes('TOXIC-DEVIL/WhatsAlexa')) { official = '*✅️ '+verified+':* ```'+TU+'```'
    } else { official = '*❗️'+verified+':* ```'+FU+'```'

    let InFoCaPtIoN = '『 '+title+' 』\n\n*📝 '+name+':* ```WhatsAlexa```\n*💬 '+version+':* ```'+Config.VERSION+'```\n*💫 '+branch+':* ```'+Config.BRANCH+'```\n*👨‍💻 '+aut+':* ```'+Config.DEVELOPER+'```\n'+official+'\n*🌐 '+git+':* ```'+Config.GIT+'```'

    await message.client.sendMessage(message.jid, fs.readFileSync("./src/image/WhatsAlexa.png"), MessageType.image, { caption: InFoCaPtIoN, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "▣ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮 ▣", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/WhatsAlexa.png')}}}});
}));
