const { Client } = require("discord.js");
const bot = new Client();

bot.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

bot.on("message", (message) => {
    if (message.content.startsWith("ping")) {
        return ping(message)
    }
    if (message.content.startsWith("!kick")) {
        return kick(message)
    }
})
client.login("NzI1MzI0Mzg4ODY1NTQwMTc2.XvNE-g.bSUznMj5ninGk-jCvMAdityObf4")