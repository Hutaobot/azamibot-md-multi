import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
		let res = await fetch(`https://random-d.uk/api/random`)
		let json = await res.json()
		conn.sendButton(m.chat, `_Random pic : duck_`, packname + ' - ' + author, json.url, [[`⧑ next duck ⧑`, `${usedPrefix + command}`]], m)
	} catch (e) {
		console.log(e)
		m.reply(`Command ${command} sedang gangguan.`)
	}
}

handler.help = ['duck']
handler.tags = ['entertainment']
handler.command = /^((random)?(duck|bebek)(random)?)$/i

handler.premium = false
handler.limit = true

export default handler
