import{test} from "@playwright/test"
test("elements controls" ,async({page}) => {
//    await page.goto("https://www.jio.com/mobile/")
//   //   waitUntil: "networkidle",timeout:3000})
// //     await page.locator("#name").fill("kiran")
// //     await page.locator("#email".fill("kk@getMaxList.com"))
// // await page.locator("//button[text()='Register']").click()
// // let text=await page.locator("//section[@class='poppins text-[14px]' and text()='Radio Button']" ).innerText()

// // console.log(text)
// // let a=await page.locator('//input[@id="domain_b"]').getAttribute('type')
// // console.log(a)

//all()
//await page.getByRole('link', { name: 'Mobiles' }).first().click()//await page.locator
// await context.close();
// await browser.close();
// await page.locator('//input[@placeholder="Jio Number"]').waitFor()
// // let a=await page.locator('//input[@placeholder="Jio Number"]').isVisible()
// let a=await page.locator('//input[@placeholder="Jio Number"]').isDisabled()
// console.log(a);
//waitfor--------------

//  await page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.ph")
// //   waitUntil: "networkidle"
//  await page.locator('#votercard').waitFor({state:"visible"})

//=========custom waits================//
 await page.goto("https://www.amazon.in/")
 await page.locator("input#twotabsearchtextbox").fill(('hp laptops'))
 let allauto=await page.locator('//div[@role="row"]').allTextContents()
 console.log(allauto);
 




})
