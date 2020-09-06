const kick = require("../commands/kick")
try {
    module.exports = (client, message) => {
        if (message.content.startsWith("!kick")) {
            return kick(message)
        }
    }
} catch {}
}