gameIsRuning = false;
module.exports = (message) => {
    if (message.content.startsWith("numgame")) {
        if (gameIsRuning == false) {
            gameIsRuning = true;
            message.channel.send('Guess the number between 1 and 100');
            tries = 1;
            randomnumber = Math.round(Math.random() * 100);
        } else {
            message.channel.send('The game is still runing');
        }
    } else {
        if (message.content == randomnumber) {
            message.channel.send("Perfect you needed " + tries + " tries");
            gameIsRuning = false
        } else if (message.content < randomnumber) {
            tries++;
            message.channel.send("Too low")
        } else {
            tries++;
            message.channel.send("Too high")
        }
    }
};