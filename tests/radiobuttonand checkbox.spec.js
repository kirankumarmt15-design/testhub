import{expect, test} from '@playwright/test'
test('radio button',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0",{waitUntil:'domcontentloaded',timeout:60000})
  await page.locator('//input[@value="Upi"]').click()



    //asserting
    // console.log(await page.locator('//input[@value="Upi"]').isChecked())


    // await expect(await page.locator('//input[@value="Upi"]').toBeChecked())

    await expect(await page.locator('//input[@value="Upi"]').isChecked).toBeFalsy()
    // await page.getByLabel('Upi')
  
    await page.waitForTimeout(4000)
})
//========checkbox===========//
test.only("checkbox",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
    await page.locator('//input[@id="domain_a"]').check()
    await page.waitForTimeout(2000)

    //===verify checked========//
    await expect (page.locator('//input[@id="domain_a"]')).toBeChecked()
    await page.locator('//input[@id="domain_a"]').uncheck()
    //verify-uncheck
    
    await expect (await page.locator('//input[@id="domain_a"]').isChecked()).toBeFalsy()
    await page.waitForTimeout(3000)
})