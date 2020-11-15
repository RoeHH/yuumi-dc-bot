const puppeteer = require('puppeteer');

module.exports = async(message) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(message.content);
    await page.screenshot({ path: './img/image.jpg', type: 'jpeg', clip: { x: 0, y: 0, width: 200, height: 400 } });
    message.channel.send({ files: ["./image.jpg"] });
}