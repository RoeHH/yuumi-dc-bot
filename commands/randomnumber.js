module.exports = (message) => {
    var maxSize = message.content.slice(13, 22);
    message.channel.send(Math.round(Math.random() * maxSize));
}