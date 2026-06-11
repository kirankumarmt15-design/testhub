import{test} from "@playwright/test"
test("basic mouse actions",async({page})=>{
    // // await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0',{waitUntil:"domcontentloaded"})
    // // await page.locator('[id="btn"]').click() ///leftclick
    // //  await page.waitForTimeout(3000)

    // //  //========right click=========//
    // //  await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1",{waitUntil:"domcontentloaded"})
    // //  await page.locator('//a[text()="Right Click"]').click({button:"right"})
    // //  await page.waitForTimeout(2000)

    // //  //double-click//
    // //  await page.goto('https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2',{waitUntil:"domcontentloaded"})
    // //  await page.locator('#btn_a').dblclick()
    // //  await page.waitForTimeout(3000)

    // //=========down and up================//
    // await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0',{waitUntil:"domcontentloaded"})
    // await page.locator('#circle').hover()
    // await page.mouse.down()
    // await page.waitForTimeout(3000)
    // await page.mouse.up()

    // //===disabled or hidden button===//
    // await page.locator('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')
    // await page.locator('//input[@id="submit"]').dispatchEvent('click')
    // await page.waitForTimeout(3000)

    //========mousehover=============/
    // await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0',{waitUntil:'domcontentloaded'})
    // await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
    // await page.waitForTimeout(5000)
    // await page.mouse.move(100,200)
    // await page.waitForTimeout(3000)

    //============scrool down & scroolup================//
// await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
// await page.waitForTimeout(2000)

// await page.mouse.wheel(0,1000)
// // await page.mouse.wheel(2000)
// // await page.mouse.wheel(-1000)
// await page.waitForTimeout(3000)

//=======scrool till the element==========//
// await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
// await page.waitForTimeout(2000)
// await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
// await page.pause()

})