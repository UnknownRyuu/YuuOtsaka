const a = '```'

exports.wait = () => {
	return`*「 ESPERA 」 ESTÁ EN PROCESO*`
}

exports.succes = () => {
	return`*「 LISTO 」*`
}

exports.lvlon = () => {
	return`*SU NIVEL AÚN ESTÁ VACÍO*`
}

exports.lvloff = () => {
	return`**`
}

exports.lvlnul = () => {
	return`**`
}

exports.lvlnoon = () => {
	return`*EL NIVEL DE GRUPO AÚN NO ESTÁ ACTIVADO*`
}

exports.noregis = () => {
	return`*「 COMO REGISTRASE 」*\n\n* ${prefix}daftar nombre|edad* \n*ejemplo: ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*「 YA REGISTRADO 」*\n\n*ya estás registrado en la base de datos*`
}

exports.stikga = () => {
	return`*sí, falló, intenta repetir el tiempo de retraso*`
}

exports.linkga = () => {
	return`*lo siento enlace inválido*`
}

exports.groupo = () => {
	return`*「SOLO GRUPO」*`
}

exports.ownerb = () => {
	return`*「PROPIETARIO DEL BOT ÚNICAMENTE」*`
}

exports.ownerg = () => {
	return`*「SOLO EL PROPIETARIO DEL GRUPO」*`
}

exports.admin = () => {
	return`*「SOLO ADMINISTRADORES DEL GRUPO」*`
}

exports.badmin = () => {
	return`*「EL BOT DEBE SER ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW EN ACTIVO*`
}

exports.bug = () => {
	return`*Se han informado problemas al propietario del BOT, no se responderá a los informes falsos*`
}

exports.wrongf = () => {
	return`*Formato incorrecto/texto en blanco*`
}

exports.clears = () => {
	return`*vaciar experiencia*`
}

exports.pc = () => {
	return`*「 REGISTRO 」*\n\n para saber si se ha registrado, consulte el mensaje que le envié \n\nNOTA:\n *si no recibe un mensaje. significa que no ha guardado su número de bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATOS DEL PAÍS 」*\n\n te has registrado con los datos \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : no olvides este número porque es importante:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* no encontrado\intenta ser sordo *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} no el script del propietario*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} tu nivel no es suficiente*\n\n*┏⊱tu nivel : ${getLevelingLevel(sender)}*\n*┣⊱:Tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${aha}*\n\n_NOTE : CHATEA/SIEMPRE PARA OBTENER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} tu nivel no es suficiente*\n\n*┏⊱tu nivel : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${ahb}*\n\n_NOTE : CHATEA/SIEMPRE PARA OBTENER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} tu nivel no es suficiente*\n\n*┏⊱tu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${ahc}*\n\n_NOTE : CHATEA/SIEMPRE PARA OBTENER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} tu nivel no es suficiente*\n\n*┏⊱tu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${ahd}*\n\n_NOTE : CHATEA/SIEMPRE PARA OBTENER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} tu nivel no es suficiente*\n\n*┏⊱tu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando: ${command}*\n*┗⊱requisitos de nivel : ${ahe}*\n\n_NOTE : CHATEA/SIEMPRE PARA OBTENER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} tu nivel no es suficiente*\n\n*┏⊱tu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${ahf}*\n\n_NOTE : CHATEA/SIEMPRE PARA OBTENER XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, client , process , pepolu, groupMetadata, groupAdmins, isGroup, isGroupAdmins, isLevelingOn, isWelkom, isOwner, isAntiLink, isBadWord) => { 
	if (isOwner) {
	    owner = "Owner"
	} else if (!isOwner) {
	    owner = "User"
	}
	if (isGroup){
	return `
${a}❏ ABOUT USER${a}
 ${a}│ Nombre : ${pushname}${a}
 ${a}│ Número : wa.me/${sender.split("@")[0]}${a}
 ${a}│ Propietario del bot : ${owner}${a}
 ${a}│ Tu dinero : Rp${uangku},-${a}
 ${a}│ XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}│ Nivel : ${getLevelingLevel(sender)}${a}
 ${a}│ Papel : ${role}${a}
 ${a}╰ Registros de usuario : ${_registered.length}${a}
 
${a}❏ACERCA DE BOT${a}
 ${a}│ Nombre : ${client.user.name}${a}
 ${a}│ Navegador : ${client.browserDescription[1]}${a}
 ${a}│ Servidor : ${client.browserDescription[0]}${a}
 ${a}│ Versión : ${client.browserDescription[2]}${a}
 ${a}│ Velocidad : ${process.uptime()}${a}
 ${a}│ Teléfono móvil : ${client.user.phone.device_manufacturer}${a}
 ${a}╰ Versión wa : ${client.user.phone.wa_version}${a}
 
${a}❏ACERCA DEL GRUPO${a}
 ${a}│ Nombre del grupo : ${groupMetadata.subject}${a}
 ${a}│ Administradores : ${isGroupAdmins}${a}
 ${a}│ Propietario : wa.me/${groupMetadata.owner.split("@")}${a}
 ${a}│ Total de miembros : ${groupMetadata.participants.length}${a}
 ${a}│ Total administradores : ${groupAdmins.length}${a}
 ${a}│ Bienvenida : ${isWelkom}${a}
 ${a}│ antibadword : ${isBadWord}${a}
 ${a}│ arrasamiento : ${isLevelingOn}${a}
 ${a}╰ antienlace : ${isAntiLink}${a}
 
 
 ${a}「uso total del comando」${a}
 *${pepolu} used*

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

${a}❏MENU CREADOR${a}
 ${a}│•${prefix}sticker${a}
 ${a}│•${prefix}quotemaker${a}
 ${a}│•${prefix}qrcode${a}
 ${a}│•${prefix}nulis${a}
 ${a}│•${prefix}text3d${a}
 ${a}│•${prefix}tahta${a}
 ${a}╰•${prefix}ttp${a}
 
${a}❏MENÚ DIVERTIDO${a}
 ${a}│•${prefix}lirik${a}
 ${a}│•${prefix}artinama${a}
 ${a}│•${prefix}chord${a}
 ${a}│•${prefix}bisakah${a}
 ${a}│•${prefix}readmore${a}
 ${a}│•${prefix}kapankah${a}
 ${a}│•${prefix}apakah${a}
 ${a}│•${prefix}rate${a}
 ${a}│•${prefix}tebakgambar${a}
 ${a}│•${prefix}meme${a}
 ${a}│•${prefix}textlight${a}
 ${a}│•${prefix}glitchtext${a}
 ${a}│•${prefix}slap${a}
 ${a}│•${prefix}emoji${a}
 ${a}│•${prefix}animequotes${a}
 ${a}│•${prefix}katacinta${a}
 ${a}│•${prefix}neonime${a}
 ${a}│•${prefix}stickerhide${a} ~[error]~
 ${a}│•${prefix}tampar${a}
 ${a}│•${prefix}quotes${a}
 ${a}│•${prefix}moddroid${a} 
 ${a}│•${prefix}apkpure${a}
 ${a}╰•${prefix}happymod${a} 
 
${a}❏MUTUO${a}
 ${a}│•${prefix}mutual${a}
 ${a}╰•${prefix}next${a}
 
${a}❏MENÚ DE MEDIOS${a}
 ${a}│•${prefix}brainly${a}
 ${a}│•${prefix}pinterest${a}
 ${a}│•${prefix}resepmasakan${a}
 ${a}│•${prefix}igstalk${a}
 ${a}│•${prefix}beritahoax${a}
 ${a}│•${prefix}tiktok${a}
 ${a}│•${prefix}infonomor${a}
 ${a}│•${prefix}fototiktok${a}
 ${a}│•${prefix}bitly${a}
 ${a}│•${prefix}tiktokstalk${a}
 ${a}│•${prefix}ssweb${a}
 ${a}╰•${prefix}kbbi${a}
 
${a}❏MUSICA${a}
 ${a}│•${prefix}ytmp3${a}
 ${a}│•${prefix}ytmp4${a}
 ${a}╰•${prefix}joox${a}
 
${a}❏NSFW${a}
 ${a}│•${prefix}anjing${a}
 ${a}│•${prefix}blowjob${a}
 ${a}│•${prefix}nekonime${a}
 ${a}│•${prefix}pokemon${a}
 ${a}│•${prefix}husbu${a}
 ${a}│•${prefix}nangis${a}
 ${a}│•${prefix}cium${a}
 ${a}│•${prefix}peluk${a}
 ${a}╰•${prefix}ranime${a}
 
${a}❏LÍMITE Y DINERO${a}
 ${a}│•${prefix}limit${a}
 ${a}│•${prefix}buylimit${a}
 ${a}│•${prefix}transfer${a}
 ${a}│•${prefix}dompet${a}
 ${a}│•${prefix}giftlimit${a}
 ${a}╰•${prefix}leaderboard${a}
 
${a}❏MENU PARA GRUPOS${a}
 ${a}│•${prefix}delete${a}
 ${a}│•${prefix}hidetag${a}
 ${a}│•${prefix}blocklist${a}
 ${a}│•${prefix}grouplist${a}
 ${a}│•${prefix}level${a}
 ${a}│•${prefix}linkgc${a}
 ${a}│•${prefix}tagall${a}
 ${a}│•${prefix}setpp${a}
 ${a}│•${prefix}add${a}
 ${a}│•${prefix}kick${a}
 ${a}│•${prefix}setname${a}
 ${a}│•${prefix}setdesc${a}
 ${a}│•${prefix}demote${a}
 ${a}│•${prefix}promote${a}
 ${a}│•${prefix}listadmin${a}
 ${a}│•${prefix}group [buka/tutup]${a}
 ${a}│•${prefix}leveling [enable/disable]${a}
 ${a}│•${prefix}nsfw [1/0]${a}
 ${a}│•${prefix}simih [1/0]${a}
 ${a}│•${prefix}welcome [1/0]${a}
 ${a}│•${prefix}antilink [1/0]${a}
 ${a}│•${prefix}join${a}
 ${a}╰•${prefix}nobadword [enable/disable]${a}
 
${a}❏HERRAMIENTAS${a}
 ${a}│•${prefix}bass${a}
 ${a}│•${prefix}tomp3${a}
 ${a}│•${prefix}slowmo${a}
 ${a}│•${prefix}gemok${a}
 ${a}│•${prefix}wasted${a}
 ${a}│•${prefix}tourl${a}
 ${a}│•${prefix}triggered${a}
 ${a}│•${prefix}wanted${a}
 ${a}│•${prefix}facebookpage${a}
 ${a}│•${prefix}gtav${a}
 ${a}│•${prefix}costumwp${a}
 ${a}│•${prefix}pantaimalam${a}
 ${a}│•${prefix}crossgun${a}
 ${a}│•${prefix}bakar${a}
 ${a}│•${prefix}pencil${a}
 ${a}╰•${prefix}tupai${a}
 
${a}❏ESPACIO EN LA NUVE${a}
 ${a}│•${prefix}addsticker${a}
 ${a}│•${prefix}getsticker${a}
 ${a}│•${prefix}stickerlist${a}
 ${a}│•${prefix}addvideo${a}
 ${a}│•${prefix}getvideo${a}
 ${a}│•${prefix}videolist${a}
 ${a}│•${prefix}getimage${a}
 ${a}│•${prefix}addImage${a}
 ${a}│•${prefix}imagelist${a}
 ${a}│•${prefix}addaudio${a}
 ${a}│•${prefix}getaudio${a}
 ${a}╰•${prefix}audiolist${a}
 
${a}❏MENÚ PARA CREADOR${a}
 ${a}│•${prefix}bc${a}
 ${a}│•${prefix}addbadword${a}
 ${a}│•${prefix}delbadword${a}
 ${a}│•${prefix}bcgc${a}
 ${a}│•${prefix}kickall${a}
 ${a}│•${prefix}setreply${a}
 ${a}│•${prefix}setprefix${a}
 ${a}│•${prefix}clearall${a}
 ${a}│•${prefix}block${a}
 ${a}│•${prefix}unblock${a}
 ${a}│•${prefix}leave${a}
 ${a}│•${prefix}event [1/0]${a}
 ${a}│•${prefix}clone${a}
 ${a}╰•${prefix}setppbot${a}

${a}❏GRACIAS A${a}
 ${a}│${a}
 ${a}│ • OTOSAKA⁶⁶⁹⁹ <traducción>${a}
 ${a}│ • AFFIS JUNIANTO <dev>${a}
 ${a}│ • FADHIL GRAPHY <partner>${a}
 ${a}│ • TERMOS BOT MEKER <team>${a}
 ${a}│ • MYBOT TEAM <team>${a}
 ${a}│${a}
 ${a}╰ • NOTE : no supliques${a}
`
} else if (!isGroup) {
    return `
${a}❏ ABOUT USER${a}
 ${a}│ Nombre : ${pushname}${a}
 ${a}│ Número : wa.me/${sender.split("@")[0]}${a}
 ${a}│ Tu dinero : Rp${uangku},-${a}
 ${a}│ XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}│ Nivel : ${getLevelingLevel(sender)}${a}
 ${a}│ Papel : ${role}${a}
 ${a}╰ Registros de usuario : ${_registered.length}${a}
 
${a}❏ACERCA DE BOT${a}
 ${a}│ • Nombre: ${client.user.name}${a}
 ${a}│ • Navegador : ${client.browserDescription[1]}${a}
 ${a}│ • Servidor : ${client.browserDescription[0]}${a}
 ${a}│ • Versión : ${client.browserDescription[2]}${a}
 ${a}│ • Velocidad : ${process.uptime()}${a}
 ${a}│ • Teléfono móvil : ${client.user.phone.device_manufacturer}${a}
 ${a}╰ • Versión wa : ${client.user.phone.wa_version}${a}
 
 ${a}「uso total del comando」${a}
 *${pepolu} used*

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

${a}❏MENU CREADOR${a}
 ${a}│•${prefix}sticker${a}
 ${a}│•${prefix}quotemaker${a}
 ${a}│•${prefix}qrcode${a}
 ${a}│•${prefix}nulis${a}
 ${a}│•${prefix}text3d${a}
 ${a}│•${prefix}tahta${a}
 ${a}╰•${prefix}ttp${a}
 
${a}❏MENÚ DIVERTIDO${a}
 ${a}│•${prefix}lirik${a}
 ${a}│•${prefix}artinama${a}
 ${a}│•${prefix}chord${a}
 ${a}│•${prefix}bisakah${a}
 ${a}│•${prefix}readmore${a}
 ${a}│•${prefix}kapankah${a}
 ${a}│•${prefix}apakah${a}
 ${a}│•${prefix}rate${a}
 ${a}│•${prefix}tebakgambar${a}
 ${a}│•${prefix}meme${a}
 ${a}│•${prefix}textlight${a}
 ${a}│•${prefix}glitchtext${a}
 ${a}│•${prefix}slap${a}
 ${a}│•${prefix}emoji${a}
 ${a}│•${prefix}animequotes${a}
 ${a}│•${prefix}katacinta${a}
 ${a}│•${prefix}neonime${a}
 ${a}│•${prefix}stickerhide${a} ~[error]~
 ${a}│•${prefix}tampar${a}
 ${a}│•${prefix}quotes${a}
 ${a}│•${prefix}moddroid${a} 
 ${a}│•${prefix}apkpure${a}
 ${a}╰•${prefix}happymod${a} 
 
${a}❏MUTUO${a}
 ${a}│•${prefix}mutual${a}
 ${a}╰•${prefix}next${a}
 
${a}❏MENÚ DE MEDIOS${a}
 ${a}│•${prefix}brainly${a}
 ${a}│•${prefix}pinterest${a}
 ${a}│•${prefix}resepmasakan${a}
 ${a}│•${prefix}igstalk${a}
 ${a}│•${prefix}beritahoax${a}
 ${a}│•${prefix}tiktok${a}
 ${a}│•${prefix}infonomor${a}
 ${a}│•${prefix}fototiktok${a}
 ${a}│•${prefix}bitly${a}
 ${a}│•${prefix}tiktokstalk${a}
 ${a}│•${prefix}ssweb${a}
 ${a}╰•${prefix}kbbi${a}
 
${a}❏MUSICA${a}
 ${a}│•${prefix}ytmp3${a}
 ${a}│•${prefix}ytmp4${a}
 ${a}╰•${prefix}joox${a}
 
${a}❏NSFW${a}
 ${a}│•${prefix}anjing${a}
 ${a}│•${prefix}blowjob${a}
 ${a}│•${prefix}nekonime${a}
 ${a}│•${prefix}pokemon${a}
 ${a}│•${prefix}husbu${a}
 ${a}│•${prefix}nangis${a}
 ${a}│•${prefix}cium${a}
 ${a}│•${prefix}peluk${a}
 ${a}╰•${prefix}ranime${a}
 
${a}❏LÍMITE Y DINERO${a}
 ${a}│•${prefix}limit${a}
 ${a}│•${prefix}buylimit${a}
 ${a}│•${prefix}transfer${a}
 ${a}│•${prefix}dompet${a}
 ${a}│•${prefix}giftlimit${a}
 ${a}╰•${prefix}leaderboard${a}
 
${a}❏MENU PARA GRUPOS${a}
 ${a}│•${prefix}delete${a}
 ${a}│•${prefix}hidetag${a}
 ${a}│•${prefix}blocklist${a}
 ${a}│•${prefix}grouplist${a}
 ${a}│•${prefix}level${a}
 ${a}│•${prefix}linkgc${a}
 ${a}│•${prefix}tagall${a}
 ${a}│•${prefix}setpp${a}
 ${a}│•${prefix}add${a}
 ${a}│•${prefix}kick${a}
 ${a}│•${prefix}setname${a}
 ${a}│•${prefix}setdesc${a}
 ${a}│•${prefix}demote${a}
 ${a}│•${prefix}promote${a}
 ${a}│•${prefix}listadmin${a}
 ${a}│•${prefix}group [buka/tutup]${a}
 ${a}│•${prefix}leveling [enable/disable]${a}
 ${a}│•${prefix}nsfw [1/0]${a}
 ${a}│•${prefix}simih [1/0]${a}
 ${a}│•${prefix}welcome [1/0]${a}
 ${a}│•${prefix}antilink [1/0]${a}
 ${a}│•${prefix}join${a}
 ${a}╰•${prefix}nobadword [enable/disable]${a}
 
${a}❏HERRAMIENTAS${a}
 ${a}│•${prefix}bass${a}
 ${a}│•${prefix}tomp3${a}
 ${a}│•${prefix}slowmo${a}
 ${a}│•${prefix}gemok${a}
 ${a}│•${prefix}wasted${a}
 ${a}│•${prefix}tourl${a}
 ${a}│•${prefix}triggered${a}
 ${a}│•${prefix}wanted${a}
 ${a}│•${prefix}facebookpage${a}
 ${a}│•${prefix}gtav${a}
 ${a}│•${prefix}costumwp${a}
 ${a}│•${prefix}pantaimalam${a}
 ${a}│•${prefix}crossgun${a}
 ${a}│•${prefix}bakar${a}
 ${a}│•${prefix}pencil${a}
 ${a}╰•${prefix}tupai${a}
 
${a}❏ESPACIO EN LA NUVE${a}
 ${a}│•${prefix}addsticker${a}
 ${a}│•${prefix}getsticker${a}
 ${a}│•${prefix}stickerlist${a}
 ${a}│•${prefix}addvideo${a}
 ${a}│•${prefix}getvideo${a}
 ${a}│•${prefix}videolist${a}
 ${a}│•${prefix}getimage${a}
 ${a}│•${prefix}addImage${a}
 ${a}│•${prefix}imagelist${a}
 ${a}│•${prefix}addaudio${a}
 ${a}│•${prefix}getaudio${a}
 ${a}╰•${prefix}audiolist${a}
 
${a}❏MENÚ PARA CREADOR${a}
 ${a}│•${prefix}bc${a}
 ${a}│•${prefix}addbadword${a}
 ${a}│•${prefix}delbadword${a}
 ${a}│•${prefix}bcgc${a}
 ${a}│•${prefix}kickall${a}
 ${a}│•${prefix}setreply${a}
 ${a}│•${prefix}setprefix${a}
 ${a}│•${prefix}clearall${a}
 ${a}│•${prefix}block${a}
 ${a}│•${prefix}unblock${a}
 ${a}│•${prefix}leave${a}
 ${a}│•${prefix}event [1/0]${a}
 ${a}│•${prefix}clone${a}
 ${a}╰•${prefix}setppbot${a}

${a}❏GRACIAS A${a}
 ${a}│${a}
 ${a}│ • OTOSAKA⁶⁶⁹⁹ <traducción>${a}
 ${a}│ • AFFIS JUNIANTO <dev>${a}
 ${a}│ • FADHIL GRAPHY <partner>${a}
 ${a}│ • MHANKBARBARS <sc ori>${a}
 ${a}│ • MYBOT TEAM <team>${a}
 ${a}│${a}
 ${a}╰ • NOTE : no supliques${a}
`
}
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 CONTENTO 」*
┏⊱ *Nombre* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limite* : +3
┣⊱ *Papel*: ${role}
┗⊱ *Nivel* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} El límite de hoy expira *\n* límite de compra para obtener un límite/subir de nivel*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 CONTAR LÍMITE 」*
el resto de tu límite : ${limitCounts}

NOTE : para llegar al límite. puede pasar de nivel o límite de compra`
}

exports.satukos = () => {
	return`*Agregar parámetro 1/habilitar o 0/deshabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nombre* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinero* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.afkOn = (pushname, reason) => {
    return `Función AFK exitosa *activada*!\n\n➸ *Username*: ${pushname}\n➸ *Razón*: ${reason}`
}

exports.afkOnAlready = () => {
    return `La función AFK se activó de antemano`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 MODO AFK 」*\n\nShhhhh! La persona está AFK, ¡no te molestes!\n➸ *Razón*: ${getReason}\n➸ *Desde*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* ha vuelto de AFK! Bienvenido de nuevo~`
}

exports.left = (num) => {
	return`finalmente la carga del grupo se reduce 𝟭, adiós @${num.split('@')[0]} tus servicios serán enterrados profundamente²`
}

exports.welcome = ( mdata , num ) => {
	return`Hola @${num.split('@')[0]}\Bienvenido al grupo *${mdata.subject}* que se sienta como en casa aquí`
}