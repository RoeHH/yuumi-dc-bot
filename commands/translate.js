const { Translate } = require('@google-cloud/translate').v2;
require('dotenv').config();

// Your credentials
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// Configuration for the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

//Discord Bot stuf
module.exports = (message) => {
    var text = message.content.slice(13);
    var language = message.content.slice(11, 13);
    translateText(text, language)
        .then((res) => {
            console.log(res);
            message.reply(res);
        })
        .catch((err) => {
            console.log(err);
        });
}

//Translate Text
const translateText = async(text, targetLanguage) => {
    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};