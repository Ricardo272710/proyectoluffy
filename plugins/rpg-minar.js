let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 1000)
let info = `_*🚩 Ohh, Genial Minastes: ${hasil} XP 🌹*_`
let time = global.db.data.users[m.sender].lastmiming + 600000
//if (new Date - global.db.data.users[m.sender].lastmiming < 600000) conn.reply(m.chat, `🕒 *Te Toca Esperar ${msToTime(time - new Date())} Para Volver Usar El Comando*`, m, rcanal) 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', packname, 'status@broadcast')   
//conn.reply(m.chat, info, m, rcanal)
global.db.data.users[m.sender].lastmiming = new Date * 1

}
handler.help = ['minar']
handler.tags = ['rpg']
handler.command = ['minar', 'miming', 'mine'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}