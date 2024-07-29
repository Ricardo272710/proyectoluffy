import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let img = imagen1
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `Bienvenido @${m.messageStubParameters[0].split`@`[0]}`
await conn.sendMini(m.chat, packname, dev, welcome, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = `Adiós @${m.messageStubParameters[0].split`@`[0]}`
await conn.sendMini(m.chat, packname, dev, bye, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `Adiós @${m.messageStubParameters[0].split`@`[0]}`
await conn.sendMini(m.chat, packname, dev, kick, img, img, redes, fkontak)
}}


/*import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let img = imagen1
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `┌─★ *Ai Yaemori - MD* \n│「 Bienvenido 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Bienvenido a\n   │✑  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, welcome, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = `┌─★ *Ai Yaemori - MD* \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Se fue\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, bye, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `┌─★ *Ai Yaemori - MD* \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Se fue\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, kick, img, img, redes, fkontak)
}}*/
