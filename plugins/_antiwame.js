const isWame = /wa.me/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    const isBug = isWame.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    
    if (isBug && isWame) {
        if (isBotAdmin && bot.restrict) {
           await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } else if (!bot.restrict) return m.reply('Semoga harimu suram!')
    }
    return !0
}

export const disable = true