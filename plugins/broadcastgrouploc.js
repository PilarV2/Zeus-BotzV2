const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
    let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
    conn.reply(m.chat, `_Send a broadcast message to ${groups.length} group_\nestimation complete ${groups.length * 1.5} seconds`, m)
    for (let id of groups) {
        await delay(1300)
        await conn.sendButtonLoc(id, await (await fetch('http://xosfor.herokuapp.com/api/matrix?q=Broadcast&apikey=8uhDyCUd')).buffer(), text, wm, 'MENU', '.menu')
    }
    m.reply('_*Broadcast Finished*_')
}
handler.help = ['bcgcloc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastgc|bcgc)(loc)$/i

handler.owner = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))
