module.exports = (message, msg) => {
    if (msg.content === "ping") {
        msg.reply("Pong!")
    }
}
