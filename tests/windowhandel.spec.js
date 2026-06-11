// import{expect, test} from "@playwright/test"
// test("",async({browser})=>{
    //creating multitabs manually
//     let context=await browser.newContext()
//     let page=await context.newPage()
//     // await page.goto("https://www.amazon.in/")
//     // let page1=await context.newPage()
//     // await page1.goto("https://www.flipkart.com/",{waitUntil:'domcontentloaded'})

//     //new tab via user action
//     await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
// await page.getByRole('link', { name: "-740 EVA Men's Sport Shoes" }).first().click()
//     await page.waitForTimeout(2000)
//     await page.goto("https://www.redbus.in/")
//     await page.click('//a[text()="Contact us"]')
// })

// test.only("handling multiple tabs",async({browser})=>{
//     let context=await browser.newContext()
//     let page=await context.newPage() 
//     await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
// let[page2]=await page.all([
// page.waitForEvent('popup'),
// page.getByRole('link', { name: "-740 EVA Men's Sport Shoes" }).first().click()])
// await page.waitForTimeout(3000)
// console.log(await page2.url())
// await expect(page2.url()).not.toBe("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
// })

//=====handel multiple window======//
// import{expect, test} from "@playwright/test"
// test("",async({browser})=>{
   
//     let context = await browser.newContext()
//     let page = await context.newPage()
// await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2",{waitUntil:'domcontentloaded'})
// let[newPage]=await Promise.all([context.waitForEvent('page'),page.click("//button[text()='Shop Now']")])
// await newPage.waitForLoadState()
// await newPage.locator("//button[text()='Add to Cart']").click()

// let title=await page.title()
// await expect(await newPage.title()).not.toBe(title)
// await page.waitForTimeout(3000)
// })

import { expect, test } from "@playwright/test";

test("Handling multiple windows and tabs", async ({ browser }) => {
    // 1. Create a clean browser context and page
    const context = await browser.newContext();
    const page = await context.newPage();

    // 2. Navigate to the target application
    await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2", { 
        waitUntil: 'domcontentloaded' 
    });

    // 3. Set up the listener BEFORE the action, then trigger the popup
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click("//button[text()='Shop Now']")
    ]);

    // 4. Wait for the new page to load its network/DOM completely
    await newPage.waitForLoadState('load');

    // 5. Interact with the element on the new page (Using better locator syntax)
    const addToCartButton = newPage.locator("//button[text()='Add to Cart']");
    await addToCartButton.click();
     await page.waitForTimeout(3000)
    // 6. Assertions (Using Playwright's built-in async locators/matchers)
    const originalTitle = await page.title();
    
    // Pass the page object or the resolved title directly to expect
    await expect(newPage).not.toHaveTitle(originalTitle);
});