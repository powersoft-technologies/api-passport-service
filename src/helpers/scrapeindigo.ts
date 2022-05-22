import playwright from "playwright"

export const scrape = async () => {
    let url = 'https://www.goindigo.in/partner-login.html?linkNav=partner-login_header'
    const browser = await playwright['chromium'].launch({headless: false});
    const page = await (await browser.newContext()).newPage();

    await page.goto(url);
    // await page.waitForLoadState('load');
    await page.waitForTimeout(3000);

    const username = await page.$('[name="agentLogin.Username"]')
    const password = await page.$('[name="agentLogin.Password"]')
    await username?.type('KTMAA056',{delay:250})
    await password?.type('Travel@2019',{delay:250})
    await password?.press('Enter')
    await page.waitForTimeout(5000)
    

    await page.waitForNavigation({waitUntil: "domcontentloaded"})
    console.log(page)

    await browser.close();
    return {username,password}
}