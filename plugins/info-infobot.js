import db from '../lib/database.js'
import { cpus as _cpus, totalmem, freemem, platform, hostname, version, release, arch } from 'os'
import speed from 'performance-now'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'

let format = sizeFormatter({
std: 'JEDEC',
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})

let handler = async (m, { conn, usedPrefix }) => {
let bot = global.db.data.settings[conn.user.jid]
let _uptime = process.uptime() * 1000
let uptime = (_uptime).toTimeString()
let totalreg = Object.keys(global.db.data.users).length
let totalbots = Object.keys(global.db.data.settings).length
let totalStats = Object.values(global.db.data.stats).reduce((total, stat) => total + stat.total, 0)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
let totalchats = Object.keys(global.db.data.chats).length
let totalf = Object.values(global.plugins).filter( (v) => v.help && v.tags ).length
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let timestamp = speed()
let latensi = speed() - timestamp
let luffy = `╭─⬣「 *Info De Spider* 」⬣\n`
luffy += `│ 👑 *Creador* : @${owner[0][0].split('@s.whatsapp.net')[0]}\n`
luffy += `│ 🍭 *Prefijo* : [  ${usedPrefix}  ]\n`
luffy += `│ 📦 *Total Plugins* : ${totalf}\n`
luffy += `│ 💫 *Plataforma* : ${platform()}\n`
luffy += `│ 🧿 *Servidor* : ${hostname()}\n`
luffy += `│ 🚀 *RAM* : ${format(totalmem() - freemem())} / ${format(totalmem())}\n`
luffy += `│ 🌟 *FreeRAM* : ${format(freemem())}\n`
luffy += `│ ✨️ *Speed* : ${latensi.toFixed(4)} ms\n`
luffy += `│ 🕗 *Uptime* : ${uptime}\n`
luffy += `│ 🍟 *Modo* : ${bot.public ? 'Privado' : 'Publico'}\n`
luffy += `│ 🚩 *Comandos Ejecutados* : ${toNum(totalStats)} ( *${totalStats}* )\n`
luffy += `│ 🐢 *Grupos Registrados* : ${toNum(totalchats)} ( *${totalchats}* )\n`
luffy += `│ 🍧 *Registrados* : ${toNum(totalreg)} ( *${totalreg}* ) Usuarios\n`
luffy += `╰─⬣\n\n`
luffy += `╭─⬣「 *Chats De Luffy* 」⬣\n`
luffy += `│ 🧃 *${groupsIn.length}* Chats en Grupos\n`
luffy += `│ 🌸 *${groupsIn.length}* Grupos Unidos\n`
luffy += `│ 🍁 *${groupsIn.length - groupsIn.length}* Grupos Salidos\n`
luffy += `│ 💬 *${chats.length - groupsIn.length}* Chats Privados\n`
luffy += `│ 💭 *${chats.length}* Chats Totales\n`
luffy += `╰─⬣\n\n`
luffy += `╭─⬣「 *NodeJS Uso de memoria* 」⬣\n`
luffy += `${'```' + Object.keys(used).map((key, _, arr) => `│ ${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}\n`
luffy += `╰─⬣`

await conn.reply(m.chat, luffy, fkontak, { contextInfo: { mentionedJid: [owner[0][0] + '@s.whatsapp.net'], externalAdReply: { mediaUrl: false, mediaType: 1, description: false, title: '↷✦╎Info - Bot╎🚩˖ ⸙',body: packname, previewType: 0, thumbnail: icons, sourceUrl: redes}}})
// await conn.sendFile(m.chat, imagen1, 'luffy.jpg', luffy, fkontak, null, rcanal)
}
handler.help = ['infobot']
handler.tags = ['main']
handler.command = ['info', 'infobot']

export default handler

function toNum(number) {
if (number >= 1000 && number < 1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number >= 1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else if (number <= -1000 && number > -1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number <= -1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else {
return number.toString()
}}
