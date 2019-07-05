const puppeteer = require("puppeteer-core");
const options = {
  headless: false,
  slowMo: 50,
  executablePath:
    "C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe"
};
const advt = async () => {
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.goto("http://dev.advt.com:8080/login", { waitUntil: "load" });
  await page.type('input[name="username"]', "yanwencheng");
  await page.type('input[name="password"]', "123456");
  await page.click("button.el-button--primary", { waitUntil: "load" });
  await page.click("svg.hamburger", { waitUntil: "load" });
  // await page.click('div.el-submenu__title:last-child',{waitUntil:'load'})
  await page.click("ul.el-menu>div.menu-wrapper>li.el-submenu:last-child", {
    waitUntil: "load"
  });
  await page.click(
    "ul.el-menu>div.menu-wrapper>li.el-submenu:last-child>ul.el-menu>a:last-child>li",
    { waitUntil: "load" }
  );
};
advt();
