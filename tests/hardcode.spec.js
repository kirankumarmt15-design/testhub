import{test} from "@playwright/test"
test("hard coded wait",async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(2000)
     await page.locator('input[type="text"]').fill("kiran@gmail.com")
         await page.waitForTimeout(2000)
await page.locator('input[type="password"]').fill("123456")
    await page.waitForTimeout(2000)
await page.locator('div[role="button"]').click()
    await page.waitForTimeout(2000)

})
test.only("autosugg",async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    await page.waitForTimeout(2000)
    let a=await page.locator('//div[@role="row"]').allTextContents()
    console.log(a)
})