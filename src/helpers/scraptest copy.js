
const puppeteer = require('puppeteer');
// import { Puppeteer } from 'puppeteer';
// import puppeteer from 'puppeteer';

// let puppeteer = Puppeteer

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('http://books.toscrape.com/');

    const result = await page.evaluate(() => {
        let data = []; // Create an empty array that will store our data
        let elements = document.querySelectorAll('.product_pod') ; // Select all Products
        console.log(elements)
        if (elements) {
            for (var element of elements){ // Loop through each proudct
                let title = element.childNodes[5].textContent; // Select the title
                let price = element.childNodes[7].children[0].innerText; // Select the price
    
                data.push({title, price}); // Push an object with the data onto our array
            }
        }

        return data; // Return our data array
    });

    browser.close();
    return result; // Return the data
};

export default scrape

scrape().then((value) => {
    console.log(value); // Success!
});
