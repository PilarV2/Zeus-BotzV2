// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/HJ9pD2XJ8vq7whuAYOvT1Y', ''] // ganti jadi group lu
global.owner = ['6283113989277','62896255561613'] // Put your number here //owner eval
global.kontak = ['6289625556161','62896255561613'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['6289625556161','601164215501','60166408295','601161197507','601156232697','601172962735','60182387590','60109211153','6281391552752'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  rey: 'https://server-api-rey.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'GAK ADA :)'
namagithub = 'https://github.com/MASTERMAN200'
kasihcaption = `Nih kak`
namakontak1 = 'Pilar Owner Bot'
namakontak2 = 'Caca Admin Bot'

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = 'Zeus Botz' // ganti aja
global.author = 'Zeus Botz' // ganti aja

//yyy
bc = 'ZeusBotz' //ZeusBotz Broadcast
footer = '\n© ZeusBotz'
namabot = 'ZEUS BOTZ'
namalu = 'PILAR'
watermark = 'ZeusBotz' //ganti aja

// 
wait = '_*Tunggu Sebentar...*_'
global.botwm = 'ZeusBotz'
global.wait = '_*Tunggu Sebentar...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='

// Ubah saja SC dari AlyaaXzy
global.image = 'https://telegra.ph/file/f96eee5c2c75bd32c1f58.png'//thumbnail

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 999 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
