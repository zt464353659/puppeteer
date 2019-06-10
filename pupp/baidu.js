// puppeteer只能异步才能正常执行
const puppeteer = require('puppeteer-core')
const index = async () => {
    try {
        const options = {
            headless: false,
            // devtools: true,
            slowMo: 100,
            executablePath: 'C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe'
        }
        const browser = await puppeteer.launch(options)
        const page = await browser.newPage({
            width: 800,
            height: 800
        })
        await page.goto('http://www.baidu.com')
        // await page.pdf({path: './img/advt.pdf',format: 'A4'})
        await page.screenshot({path: './img/baidu.png'})
        await page.goto('https://www.baidu.com')
        await page.screenshot({path: './img/icon.png'})
        // await page.click('#su')
        // await page.goto('https://element.faas.ele.me/#/zh-CN/component/installation')
        browser.close()
    } catch (e) {
        console.log(e)
    }
}
index()