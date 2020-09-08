const kick = require("../commands/kick")
    module.exports = (client, message) => {
        if (message.content.startsWith("!kick")) {
            return kick(message)
        }
    }

const ping = require("../commands/ping")
    module.exports = (client, message, msg) => {
        if (message.content.startsWith("ping")) {
            return ping(message, msg)
        }
    }
