const { User } = require("discord.js")

const ping = require("../commands/ping.js")
const pong = require("../commands/pong.js")
const avatar = require("../commands/avatar.js")
const F = require("../commands/F.js")

module.exports = (client, message) => {
    if (message.content.startsWith("ping")) {
        return ping(message);
    }
    if (message.content.startsWith("pong")) {
        return pong(message);
    }
    if (message.content.startsWith("avatar?")) {
        return avatar(message);
    }
    if (message.content.startsWith("F")) {
        return F(message);
    }
    if (message.content.startsWith("!play")) {
        message.react(":musical_note:");
    }
}