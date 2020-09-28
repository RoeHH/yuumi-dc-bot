module.exports = (message) => {
    var rand = Math.floor(Math.random() * 6);
    console.log(rand);
    if (rand == 0) {
        message.channel.send('https://www.pinclipart.com/picdir/big/554-5544409_letter-facebook-clip-art-large-f-transparent-background.png');
    } else if (rand == 1) {
        message.channel.send('https://www.pinclipart.com/pindetail/iwmibm_f-letter-png-clipart-photo-letter-f-in/#.X3F69gOdhAs.link');
    } else if (rand == 2) {
        message.channel.send('https://www.pinclipart.com/pindetail/ioRwThx_huruf-f-icon-png-clipart/#.X3F7qzQ5LaY.link');
    } else if (rand == 3) {
        message.channel.send('https://www.pinclipart.com/pindetail/iiJmRJi_610-x-981-2-letter-f-png-clipart/#.X3F777-EJD4.link');
    } else if (rand == 4) {
        message.channel.send('https://www.pinclipart.com/pindetail/ibixwRi_letter-f-to-trace-clipart/#.X3F8i-BCqvk.link');
    } else if (rand == 5) {
        message.channel.send('https://www.pinclipart.com/pindetail/ibimwTw_musical-symbol-of-letter-f-svg-png-icon/#.X3F8OjuwKmI.link');
    } else {
        console.log("rand dos not match");
    }
}