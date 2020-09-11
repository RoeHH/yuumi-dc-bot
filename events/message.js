const kick = require("../commands/kick")
const ping = require("../commands/ping")
const pong = require("../commands/pong")
const LeagueofLegendsWorldsTheme = require("../commands/wöud")
module.exports = (client, message) => {
    if (message.content.startsWith("kick")) {
        return kick(message)
    }
    if (message.content.startsWith("ping")) {
        return ping(message)
    }
    if (message.content.startsWith("pong")) {
        return pong(message)
    }
    if (message.content.startsWith("!play")) {
        return LeagueofLegendsWorldsTheme(message)
    }
}