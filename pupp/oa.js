const puppeteer = require("puppeteer-core");
const oa = async () => {
  const options = {
    headless: false,
    slowMo: 50,
    executablePath:
      "C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe",
    devtools: true,
    defaultViewport: {
      width: 1000,
      height: 1000
    }
  };
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.goto(
    "http://oa.suntekcorps.com/login/Login.jsp?gopage=/hrm/resource/HrmResourcePassword.jsp?isfromtab=false&_token_=f5ce0de3-bbf8-43f5-b2b2-c9920a194a4d",
    { waitUntil: "load" }
  );
  await page.type("#loginid", "xast271");
  await page.type("#userpassword", "697353");
  await page.click("#login");
  //  弹窗捕获 出现弹窗关闭
  const dialog = await page.waitForSelector("input.zd_btn_cancle");
  if (dialog) {
    await page.click("input.zd_btn_cancle");
  }
  // 等待左菜单渲染完成
  const menu = await page.waitForSelector("#portal2");
  if (menu) {
    await page.click("#portal2");
  }
  const table = await page.waitForSelector("#topCenterTable");
  if (table) {
    //  console.log(table)
    await page.click('div.menuItem[title="SHR登录"]');
    //  const _tr = await page.evaluate((el) => {
    //      const tr = document.querySelector
    //      console.log(tr)
    //     //  tr.click()
    //     //  return tr
    //  }, table)
    //  _tr.click()
  }
  //  const my = await page.waitForSelector('#/SDJjs7TS3m7bErE7a7esdj/1C4=')
  //  if(my) {
  //      await page.click('#/SDJjs7TS3m7bErE7a7esdj/1C4=')
  //  }
  //  await page.evaluate((el) => {
  //      console.log(table)
  //  }, table)
  //  await page.click('.topMenuDiv .menuItem:nth-child(2) div:first-of-type')
  // await page.waitForNavigation()
  // await page.goto('http://shr.suntekcorps.com:6888/shr/dynamic.do?uipk=com.kingdee.eas.hr.ats.app.WorkCalendarItem.listSelf&inFrame=true&fromHeader=true',{waitUntil: 'load'})
  // await page.waitFor(3000)
  // browser.close()
};
oa();
