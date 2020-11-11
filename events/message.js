const { User } = require("discord.js")

const ping = require("../commands/ping.js")
const pong = require("../commands/pong.js")
const avatar = require("../commands/avatar.js")
const translate = require("../commands/translate.js")
const stop = require("../commands/stop.js")

module.exports = (client, message) => {
    if (message.author.bot) return;
    if (message.content.toLowerCase().startsWith("ping")) {
        return ping(message);
    }
    if (message.content.toLowerCase().startsWith("pong")) {
        return pong(message, client);
    }
    if (message.content.startsWith("avatar?")) {
        return avatar(message);
    }
    if (message.content.startsWith("!stop")) {
        return stop(msg);
    }
    //Translations
    if (message.content.startsWith("translate:")) {
        return translate(message);
    }
}