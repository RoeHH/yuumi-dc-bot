const { User, GuildChannelManager } = require("discord.js")

const avatar = require("../commands/avatar.js")
const translate = require("../commands/translate.js")
const stop = require("../commands/stop.js")
const numgame = require("../commands/numgame.js")
const randomnumber = require("../commands/randomnumber.js")
const F = require("../commands/F.js")
const serverstats = require("../commands/serverstats.js")
const opgg = require("../commands/opgg.js")



module.exports = (client, message) => {
    if (message.content.startsWith("delete")) {
        var anzahl = Number(message.content.slice(6, 1000));
        anzahl = anzahl + 1;
        if (isNaN(anzahl)) {} else {
            channelId = message.channel.id;
            const channel = client.channels.cache.get(channelId);
            channel.messages.fetch({ limit: anzahl }).then(messages => {
                messages.forEach(message => message.delete())
            })
        }
    }
    if (message.author.bot) return;
    if (message.content.toLowerCase().startsWith("ping")) {
        message.channel.send('Pong!');
    }
    if (message.content.toLowerCase().startsWith("pong")) {
        message.channel.send('Ping!');
    }
    if (message.content.startsWith("avatar?")) {
        return avatar(message);
    }
    if (message.content.startsWith("!stop")) {
        return stop(message);
    }
    if (message.content.startsWith("randomnumber")) {
        return randomnumber(message);
    }
    //Translations
    if (message.content.startsWith("translate:")) {
        return translate(message);
    }
    //Number Game
    if (message.content.startsWith("numgame")) {
        return numgame(message);
    }
    if (isNaN(message.content)) {} else {
        return numgame(message);
    }
    if (message.content.startsWith("F")) {
        return F(message);
    }
    if (message.content.startsWith("chanelid")) {
        h = message.channel.id;
        console.log(h);
        message.channel.send(h);
    }
    if (message.content.startsWith("LICENSE")) {
        message.channel.send("http://www.wtfpl.net/txt/copying/");
    }
    if (message.content.startsWith("serverstats")) {
        return serverstats(message)
    }
    if (message.content.startsWith("lol")) {
        return opgg(message)
    }
}