
const puppeteer = require('puppeteer');
// import { Puppeteer } from 'puppeteer';
// import puppeteer from 'puppeteer';

// let puppeteer = Puppeteer

export const scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    let url = 'https://www.goindigo.in/partner-login.html?linkNav=partner-login_header'

    await page.goto(url);
    await page.waitForTimeout(1000);
    // let username = document.getElementsByName('agentLogin.Username')
    // await page.evaluate(() => {
    //     password = document.getElementsByName('agentLogin.Password')
    //     submit = document.getElementsByTagName('/html/body/div[2]/section/div[3]/div[1]/div/div/div/div/div/div/div[2]/div/form/div[4]/div[1]/button')
    // })
    // // submit = document.getElementsByTagName('/html/body/div[2]/section/div[3]/div[1]/div/div/div/div/div/div/div[2]/div/form/div[4]/div[1]/button')
    // let username = await page.evaluate(() => {
    //     return document.getElementsByName('agentLogin.Username')
    // })
    
    let username = await page.$x('/html/body/div[2]/section/div[3]/div[1]/div/div/div/div/div/div/div[2]/div/form/div[1]/div/div/input')
    let password = await page.$x('/html/body/div[2]/section/div[3]/div[1]/div/div/div/div/div/div/div[2]/div/form/div[2]/div/div/input')
    // let password = await page.$name('agentLogin.Password')
    let submit =  await page.$x('/html/body/div[2]/section/div[3]/div[1]/div/div/div/div/div/div/div[2]/div/form/div[4]/div[1]/button')

    console.log(password)
    username[0].type('KTMAA056')
    await page.waitForTimeout(1000);
    password[0].type('Travel@2019')
    await page.waitForTimeout(3000);
    // await page.click('')
    let result  = await submit[0].click()
    console.log("clicked", result)
    // username[0].keyboard.type('KTMAA056')
    // username.$eval(username, el => el.value = 'KTMAA056')
    // await page.type("#agentLogin.Password", "Travel@2019");
    // await page.click('input[type="submit"]');
    await page.waitForNavigation({waitUntil: 'networkidle2'});
    // await page.waitForTimeout(3000);
    // console.log('New Page URL:', page.url());

    // let username = page.getElementsByName('agentLogin.Username')
    // let password = page.getElementsByName('agentLogin.Password')
    // page.$eval(username, el => el.value = 'KTMAA056')

    // const result = await page.evaluate(() => {
    //     let data = []; // Create an empty array that will store our data
    //     // let elements = document.querySelectorAll('.product_pod') ; // Select all Products
    //     let username = document.getElementsByName('agentLogin.Username')
    //     let password = document.getElementsByName('agentLogin.Password')
    //     let submit = document.getElementsByTagName('/html/body/div[2]/section/div[3]/div[1]/div/div/div/div/div/div/div[2]/div/form/div[4]/div[1]/button')
    //     page.$eval(username, el => el.value = 'KTMAA056')
    //     //@ts-ignore
    //     // username.keyboard.type('KTMAA056')
    //     // //@ts-ignore
    //     // password.keyboard.type('Travel@2019')
    //     // //@ts-ignore
    //     // submit.keyboard.press('Enter')
    //     page.waitForTimeout(3000);
    //     // username.$eval()
    //     // username.send_keys('KTMAA056')
    //     // password.send_keys('Travel@2019')
    //     // submit.click()
    //     // console.log(elements)
    //     // if (elements) {
    //     //     for (var element of elements){ // Loop through each proudct
    //     //         let title = element.childNodes[5].textContent; // Select the title
    //     //         //@ts-ignore
    //     //         let price = element.childNodes[7].children[0].textContent; // Select the price
    //     //         let price2 = element.childNodes[7].firstChild?.nextSibling?.textContent; // Select the price
    
    //     //         data.push({title, price, price2}); // Push an object with the data onto our array
    //     //     }
    //     // }

    //     return true; // Return our data array
    // });

    browser.close();
    return true; // Return the data
};


scrape().then((value) => {
    console.log(value); // Success!
});
