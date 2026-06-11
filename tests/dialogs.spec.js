import{expect, test} from "@playwright/test"
// test("dialog handling",async({page})=>{

//     //==========page.on================//
//     await page.goto("https://testautomationpractice.blogspot.com/",{waitUntil:'domcontentloaded'})
//     page.on("dialog",async(dialog)=>{if(dialog.type()=='alert'){
//         console.log(await dialog.message());
//     await dialog.accept()
        
//     }else if(dialog.type()=='confirm'){await dialog.accept()}
//     else if(dialog.type()=='prompt'){
//         if(dialog.defaultValue=='tom'){
//             console.log(await dialog.defaultValue());
//              }else{
//                 await dialog.accept("Tom")
//              }
//     }
// })
// await page.getByRole("button",{name:'Simple Alert'}).click()

// await page.getByRole("button",{name:'Confirmation Alert'}).click()

// await expect( page.locator("#demo")).toContainText("OK")
// await page.getByRole("button",{name:"Prompt Alert"}).click()
// await expect(page.locator("#demo"))
//   .toHaveText("Hello Tom! How are you today?");await page.waitForTimeout(2000)
// //============page.once===============//

  test.only("dialogs using page.once",async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/",{waitUntil:'domcontentloaded'})
        await page.getByRole("button",{name:'Simple Alert'}).click()

await page.getByRole("button",{name:'Confirmation Alert'}).click()
 page.once("dialog",async(dialog)=>{dialog.accept('alert')})
 await page.getByRole("button",{name:"Prompt Alert"}).click()
 await page.reload()
 await page.getByRole("button",{name:"Prompt Alert"}).click()

  })
// })