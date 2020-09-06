module.exports = (message) => {
    if (msg.content === "ping") {
        msg.reply("Pong!")
    }
}