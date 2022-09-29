let handler =  m => m.reply(`
╭─「 🧚🏻‍♂️ *DONASI* 」
│
├ DANA / GOPAY :
├ • _*085722157719*_
│
├ PULSA :
├ _*083854551575*_
│
├ Ownerku
├ _wa.me/6283854551575_
│
╰───「 ${packname} 」
`.trim()) // Tambah sendiri kalo mau

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler
