const { WAConnection, MessageType, Mimetype, } = require('@adiwajshing/baileys');
const fs = require('fs');
const conn = require("./lib/connect")
conn.connect()
const leo = conn.leo
leo.on('chat-update', async (choute));
const conts = choute.key.fromMe ? leo.user.jid : leo.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = choute.key.fromMe ? leo.user.name : conts.notify || conts.vname || conts.name || '-'

    const menu = `T90 má¾á s
    ðð¬ð®ðð«ð¢ð¨: ${pushname}
    ðð.ð¦ð:wa.me/
    ðð¨ð«ð: 
    
    *ðð«ð®ð©ð¨ð¬:* 
    _cg_
    _comag_
    
    *ððð¬ððð«ð ðð¬:*
    _dowloan_
    _descargas_
    _bajar_
    
    *ðð­ð¢ðð¤ðð«:*
    _sticker_
    _st_
    _stiker_aa
        
    *ðð§ð­ð«ðð­ðð§ð¢ð¦ð¢ðð§ð­ð¨:*
    _entrenimiento_
    _entrete_
    _meaburro_
        
    *ðð«ððð¢ð­ð¨ð¬*
    _creador_`
    
    module.exports = {
        menu,
    } 
