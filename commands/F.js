module.exports = (message) => {
    var x = 0;
    var clear = 0;
    f_function(x, clear);

    function f_function(x, clear) {
        if (x > 0) {
            clear = clear + 1;
        } else {
            x = 1;
        }
        var rand = Math.floor(Math.random() * 10);
        console.log(rand);
        if (rand == 0) {
            console.log("no F");
            message.channel.send("delete " + clear);
        } else if (rand == 1) {
            message.channel.send('https://www.pinclipart.com/picdir/big/543-5436574_letter-f-to-trace-clipart.png');
            f_function(x, clear);
        } else if (rand == 2) {
            message.channel.send('https://www.pinclipart.com/picdir/big/48-487081_clipart-letter-f-f-letter-logo-png-transparent.png');
            f_function(x, clear);
        } else if (rand == 3) {
            message.channel.send('https://www.pinclipart.com/picdir/big/55-559390_f-letter-png-clipart-photo-letter-f-in.png');
            f_function(x, clear);
        } else if (rand == 4) {
            message.channel.send('https://www.pinclipart.com/picdir/big/450-4506516_monogram-letters-open-letter-f-initial-monogram-letter.png');
            f_function(x, clear);
        } else if (rand == 5) {
            message.channel.send('https://www.pinclipart.com/picdir/big/520-5208112_letter-case-f-calligraphy-ladin-alphabet-free-commercial.png');
            f_function(x, clear);
        } else if (rand == 6) {
            message.channel.send('https://www.pinclipart.com/picdir/big/581-5810588_huruf-f-icon-png-clipart.png');
            f_function(x, clear);
        } else if (rand == 7) {
            message.channel.send('https://www.pinclipart.com/picdir/big/376-3760009_610-x-981-2-letter-f-png-clipart.png');
            f_function(x, clear);
        } else if (rand == 8) {
            message.channel.send('https://www.pinclipart.com/picdir/big/544-5449107_musical-symbol-of-letter-f-svg-png-icon.png');
            f_function(x, clear);
        } else if (rand == 9) {
            message.channel.send('https://www.pinclipart.com/picdir/big/554-5544409_letter-facebook-clip-art-large-f-transparent-background.png');
            f_function(x, clear);
        } else {
            console.log("kaput");
        }
    }
}