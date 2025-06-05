const fs = require("fs");
module.exports.config = {
  name: "lund",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("lund") ||
     react.includes("LUND") || react.includes("Lol") || react.includes("lnd") ||
react.includes("laude") ||
react.includes("loda")) {
    var msg = {
        body: `𝐀𝐛𝐲 𝐁𝐡𝐧 𝐤 𝐋𝐨𝐫𝐲 𝐓𝐫𝐚 𝐋𝐮𝐧 𝐊𝐚𝐭 𝐊 𝐇𝐚𝐭𝐡 𝐌 𝐏𝐤𝐫𝐚 𝐃𝐨𝐧𝐠𝐚 𝐀𝐛 𝐆𝐚𝐥𝐢 𝐃😐😒👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
