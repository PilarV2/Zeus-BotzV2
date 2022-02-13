let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
*────────「 SCRIPT 」 ────────*
> Script Ori = https://github.com/AlyaaXd/rfkbot

> Script Recode By Pilar = https://github.com/PilarV2/Zeus-BotzV2

`.trim(), '© ZeusBotz', 'Thanks', '.tqto')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
