module.exports = (msg => {
    id = message.channel.id;
    message.reply(id);
    msg.channel.send("We are Anonymous.\nWe are Legion.We do not forgive.\nWe do not forget.\nExpect us.\n", msg.author.id)
});