import{test} from '@playwright/test'
test("drag and drop",async({page})=>{
    //drag and drop===========
    // await page.goto('https://demoapps.qspiders.com/ui/dragDrop?sublist=0')
    // await page.locator("//div[text()='Drag Me']").hover()
    // await page.waitForTimeout(2000)
    // await page.mouse.down()
    // await page.mouse.move(200,500)
    // await page.waitForTimeout(2000)
    // await page.mouse.up()

    //=======drag and drop to element==========//
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    // await page.locator('//div[text()="Mobile Charger"]').hover()
    // await page.waitForTimeout(2000)
    // await page.mouse.down()
    // await page.locator('//div[text()="Mobile Accessories]/parent::div').hover()
    // await page.mouse.up()
    // await page.waitForTimeout(2000)
    //===========drag and drop by taking ele location=========//
    // await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    // await page.locator('//div[text()="Mobile Charger"]').hover()
    // await page.mouse.down()
    // await page.waitForTimeout(2000)
    // let box=await page.locator('//div[text()="Mobile Accessories]/parent::div').boundingBox()
    // await page.mouse(box.x.box.y)
    // await page.mouse.up()
    // await page.waitForTimeout(2000)

    //==========dragto==========//
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    await page.locator('//div[text()="Mobile Charger"]')
    await page.locator('//div[text()="Mobile Accessories]/parent::div')
    await page.waitForTimeout(2000)
    await source.dragTo(target)
    await page.waitForTimeout(3000)
})
