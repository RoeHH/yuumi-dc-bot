const kick = require("../commands/kick")
try {
    module.exports = (client, message) => {
        if (message.content.startsWith("!kick")) {
            return kick(message)
        }
    }
} catch {}
const ping = require("../commands/ping")
try {
    module.exports = (client, message) => {
        if (message.content.startsWith("ping")) {
            return kick(ping)
        }
    }
} catch {}