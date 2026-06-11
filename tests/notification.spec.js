import{test} from "@playwright/test"
test("",async ({browser})=>{
    let context=await browser.newContext({permissions:["notification","microphone","geolocation","camera"]})
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.getByRole("button",{name:"Notification"}).click()
    //==========validation of permission status==========//
    let result=await page.evaluate(()=>{return Notification.requestPermission()})
     console.log(`permissions:${result}`)
     //=======revoke all the permissions=========//
    await context.clearPermissions()
    let results2=await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result2}`)
})