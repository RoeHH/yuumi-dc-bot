const request = require('request');
module.exports = async(message) => {
    request('https://to-do-list-api-blj.herokuapp.com/lists', { json: true }, (err, res, body) => {
        if (err) return console.log(err);
        //g = res.body[0];
        //console.log(g.name);
        console.log(body);
        message.channel.send("```json\n" + JSON.stringify(body, null, 2) + "```");
    });
}