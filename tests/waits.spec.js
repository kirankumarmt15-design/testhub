import{test} from "@playwright/test"
test("check",async({page}) =>{

    await page.goto("https://www.flipkart.com/")
    await page.pause()
    await page.locator('[role="button"]').click()


//    await page.locator('input[value="Male"]').click()
//      // await a.waitFor({state:"visible"})
//     // await a.click()
//     await page.pause()
// await page.locator('input[type="text"]').fill("kiran@gmail.com")
// await page.locator('input[type="password"]').fill("123456")
// await page.locator('div[role="button"]').click()


})