const puppeteer = require('puppeteer');

module.exports = async(message) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 2800 });
    if (message.content.slice(3, 4) == "r") {
        await page.goto("https://euw.op.gg/champion/" + message.content.slice(5));
        await page.screenshot({ path: './img/image.jpg', type: 'jpeg', clip: { x: 415, y: 1850, width: 720, height: 600 } });
        message.channel.send("Runes:");
        message.channel.send({ files: ["./img/image.jpg"] });
    } else if (message.content.slice(3, 4) == "p") {
        await page.goto("https://euw.op.gg/summoner/userName=" + message.content.slice(4));
        await page.screenshot({ path: './img/image1.jpg', type: 'jpeg', clip: { x: 421, y: 160, width: 600, height: 200 } });
        await page.screenshot({ path: './img/image2.jpg', type: 'jpeg', clip: { x: 421, y: 630, width: 1300, height: 750 } });
        message.channel.send({ files: ["./img/image1.jpg"] });
        message.channel.send({ files: ["./img/image2.jpg"] });
    } else {
        await page.goto("https://euw.op.gg/champion/" + message.content.slice(4));
        await page.screenshot({ path: './img/imagechamp.jpg', type: 'jpeg', clip: { x: 415, y: 155, width: 420, height: 230 } });
        message.channel.send({ files: ["./img/imagechamp.jpg"] });
    }
}
