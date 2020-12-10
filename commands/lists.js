const request = require('request');
module.exports = async(message) => {
    request('https://to-do-list-api-blj.herokuapp.com/lists', { json: true }, (err, res, body) => {
        if (err) return console.log(err);
        //g = res.body[0];
        //console.log(g.name);
        for (i = 0; i < 4; i++) {
            console.log(body[i].name);
            message.channel.send(body[i].name);
        }


    });
}