module.exports = (message) => {
    var maxSize = message.content.slice(13, 25);
    if (isNaN(message.content)) {
        message.channel.send("Bitte gebe eine Zahl hinter randomnumber ein")
    } else {
        message.channel.send(Math.round(Math.random() * maxSize));
    }
}
