import{test} from '@playwright/test'
test("kreyboard actions",async ({page})=>{
    // await page.goto('https://demoapps.qspiders.com/ui/virtual?sublist=0')
    // await page.locator("#name").fill('kiran')
    // //===type======//
    // await page.locator("#name").type("kumar")
    // await page.type("#name","kiran")
    // await page.locator("#name").click()
    // await page.keyboard.type("kumar")

    //========insertText======//
    // await page.locator("#email").click()
    // await page.keyboard.insertText('kiran')

    //====down and up================//
    //   await page.locator("#email").click()
    // await page.keyboard.insertText('kiran')
    // await page.keyboard.down('Space')
    // await page.keyboard.up("Space")
    // await page.keyboard.down("R")
    // await page.keyboard.up('R')
    // await page.waitForTimeout(3000)

//==========press===========//
//      await page.locator("#email").click()
//     await page.keyboard.insertText('kiran')
// await page.keyboard.press('Tab')
// await page.keyboard.type("kiran@gmail.com")
// await page.keyboard.press("Control+A")
// await page.keyboard.press("Control+C")
// await page.keyboard.press("Tab")
// await page.keyboard.press("Control+v")
// await page.waitForTimeout(3000)

//=========scrooling through keyboard======//
await page.goto('https://www.amazon.in/')
for(let i = 1; i < 11; i++) {
    await page.keyboard.press('ArrowUp')
}
await page.waitForTimeout(3000)

})