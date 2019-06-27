// 墨菲定律第一章纪录在txt文件中，需要fs模块
const fs = require("fs");
const pupp = require("puppeteer-core");
const options = {
  headless: false,
  // devtools: true,
  slowMo: 100,
  // 本机的chrome浏览器的位置
  executablePath:
    "C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe"
};
const mf = async () => {
  const browser = await pupp.launch(options);
  const page = await browser.newPage();
  // 打开baidu
  await page.goto("http://www.baidu.com");
  // 输入墨菲定律
  await page.type("#kw", "墨菲定律");
  // 点击百度一下
  await page.click("#su");
  // 等待搜索内容出现，标签渲染完成
  const content = await page.waitForSelector("#content_left");
  if (content) {
    // 点击第一条标题进入百度知道
    const response = await Promise.all([
      page.waitForNavigation({ waitUntil: "load" }), // The promise resolves after navigation has finished
      page.click("div.c-container:nth-child(2)>h3>a") // 点击该链接将间接导致导航(跳转)
    ]);
    console.log(response);
    const inner = await response.waitForSelector("ol.custom_num");
    if (inner) {
      const html = await response.$$eval("ol.custom_num", ol => ol);
      console.log(html);
    }

    //  await page.click('div.c-container:nth-child(2)>h3>a')
  }
  // 等待页面dom渲染完成
};
mf();
