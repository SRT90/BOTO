const fs = require('fs');

const {from, sender, fromMe } =  fs.readFileSync('./thechoute.js')

const janza = {
    key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
    },
    message: {
    "productMessage": {
    "product": {
    "productImage":{
    "mimetype": "image/jpeg",
    "jpegThumbnail": fs.readFileSync(`./media/imagen/fake.jpg`)
    },
    "title": `Tbot|T90 má¾á s`,
    "description": "",
    "currencyCode": "NIUSES",
    "priceAmount1000": "999999999999999999",
    "retailerId": "",
    "productImageCount": 999
    },
    "businessOwnerJid": `0@s.whatsapp.net`
    }
    }
    }
    contextInfo: {
    mentionedJid: [sender]}


    const janz = {
      key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
      },
      message: {
      "productMessage": {
      "product": {
      "productImage":{
      "mimetype": "image/jpeg",
      "jpegThumbnail": fs.readFileSync(`./media/imagen/fake.jpg`)
      },
      "title": `ð¥ððð¦ð§ð ðð ð ðð¡ð¨ð¦ð¥`,
      "description": "",
      "currencyCode": "NIUSES",
      "priceAmount1000": "999999999999999999",
      "retailerId": "",
      "productImageCount": 999
      },
      "businessOwnerJid": `0@s.whatsapp.net`
      }
      }
      }
      contextInfo: {
      mentionedJid: [sender]}

    const menuall = {
      key:
      { fromMe: false,
      participant: `0@s.whatsapp.net`, ...(from ?
      { remoteJid: "status@broadcast" } : {}) },
      message: { "videoMessage": { "caption":"ð¥ MENU COMPLETO ð¥", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
      }
      contextInfo: {
      mentionedJid: [sender]}

      const qmiembros = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
        { remoteJid: "status@broadcast" } : {}) },
        message: { "videoMessage": { "caption":"ð¥ ð´ð¬ðµð¼ ð·ð¨ð¹ð¨ ð»ð¶ð«ð¶ðº ð¥", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
        }
        contextInfo: {
        mentionedJid: [sender]}
        
      const brillo = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
        { remoteJid: "status@broadcast" } : {}) },
        message: { "videoMessage": { "caption":"ð¥ ðððððððð ðððð ððððð ð¥", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
        }
        contextInfo: {
        mentionedJid: [sender]}

      const juegosc = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
        { remoteJid: "status@broadcast" } : {}) },
        message: { "videoMessage": { "caption":"ð¥ ððð¿ðð ððð ð¾ððð¼ðð¿ðð ð¥", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
        }
        contextInfo: {
        mentionedJid: [sender]}

        const fimg = {
          key:
          { fromMe: false,
          participant: `0@s.whatsapp.net`, ...(from ?
          { remoteJid: "status@broadcast" } : {}) },
          message: { "imageMessage": { "mimetype": "image/jpeg","caption": `T90 má¾á s`, 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
          }
          contextInfo: {
          mentionedJid: [sender]}

          const cnal = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ?
            { remoteJid: "status@broadcast" } : {}) },
            message: { "videoMessage": { "caption":"ð¥T90 má¾á s ð¥", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
            }
            contextInfo: {
            mentionedJid: [sender]}
            module.exports = {
                janza, menuall, qmiembros, brillo, fimg, cnal, janz
            }