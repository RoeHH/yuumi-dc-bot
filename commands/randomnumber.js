module.exports = (message) => {
    var maxSize = message.content.slice(13, 22);
    if (isNaN(message.content)) {
        message.channel.send("Bitte gebe eine Zahl hinter randomnum ein")
    } else {
        message.channel.send(Math.round(Math.random() * maxSize));
    }
}