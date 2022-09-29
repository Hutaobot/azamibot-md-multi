//import { createRequire } from 'module';
//const require = createRequire(import.meta.url);

let handler = async (m, { conn, command }) => {
	let ini_txt = `❤‍🩹 *[ Chat Dengan Creator ]*
wa.me/6283854551575

╔╣ *PREMIUM USER*
║ • 5k  / 1 minggu
║ • 10k / 1 bulan 
║ • 20k / 2 bulan
║ • 50k / 1 tahun
╚══╣ *HU TAO BOT-MD* || *2022*

╔╣ *SEWA BOT*
║ • 5k  / 1 minggu
║ • 10k / 1 bulan 
║ • 20k / 2 bulan 
║ • 50k / 1 tahun 
╚══╣ *HU TAO BOT-MD* || *2022*

╔╣ *Top Up Game*
║ • list di owner 
║ • wa.me/6283854551575
╚══╣ *Harga bisa minta diskon*

- Pembayaran via */ Dana / GoPay / Pulsa*
  *( tidak ada opsi lain )*
  ke nomor 085722157719
  For pulsa 083854551575
- Whatsapp Multi Device
- Run via RDP (Always ON)
- Request Fitur? *Chat Link Creator di atas.*`
	//m.reply(ini_txt)
	command = command.toLowerCase()
	conn.relayMessage(m.chat,  {
		requestPaymentMessage: {
			currencyCodeIso4217: 'USD',
			amount1000: command.includes('prem') ? '0670' : command.includes('sewa') ? 1010 : 1680,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: ini_txt,
					contextInfo: {
						mentionedJid: [m.sender],
						externalAdReply: {
							showAdAttribution: true
						}
					}
				}
			}
		}
	}, {})

	/*const { prepareWAMessageMedia, generateWAMessageFromContent, proto } = require("@adiwajshing/baileys")
	let fs = require('fs')
	var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/anime.jpg') }, { upload: conn.waUploadToServer })
	var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
		"productMessage": {
			"product": {
				"productImage": messa.imageMessage,
				"productId": "5838766206142201",
				"title": `Sewa Bot`,
				"description": `gaktau`,
				"currencyCode": "IDR",
				"bodyText": `gaktaukalo`,
				"footerText": `koncol`,
				"priceAmount1000": "15000000",
				"productImageCount": 100,
				"firstImageId": 1,
				"salePriceAmount1000": "15000000",
				"retailerId": `ꪶ𝐖𝐫𝐚𝐧𝐳𝐓𝐚𝐦𝐩𝐚𝐧𝐳⿻ꫂ`,
				"url": "wa.me/6282337245566"
			},
			"businessOwnerJid": "6282337245566@s.whatsapp.net",
		}
	}), { userJid: m.chat, quoted: m })
	conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })*/
}

handler.menugroup = ['premium','sewabot']
handler.tagsgroup = ['group']
handler.command = /^(sewa(bot)?|prem(ium)?)$/i

export default handler
