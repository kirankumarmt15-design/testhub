//sets the view port size for the current browser

// import{test} from "@playwright/test"
// test("browser controls",async({page})=>{
//     await page.goto("https://www.google.com")
//     await page.setViewportSize({width:1000,height:500})
// })

//return the curent view port size


// import{test} from "@playwright/test"
// test("browser controls",async({page})=>{
//     await page.goto("https://www.google.com")
//     await page.setViewportSize({width:1000,height:500})
//     let size=await page.viewportSize()
//     console.log(size)
// })

//return the initial and latest size of browser

// import{test} from "@playwright/test"
// test("browser controls",async({page})=>{
//     await page.goto("https://www.google.com")
//       let size1=await page.viewportSize()
//       console.log(size1)
//     await page.setViewportSize({width:1000,height:500})
//     let size=await page.viewportSize()
//     console.log(size)
// })

//to check the tittle

// import{test} from "@playwright/test"
// test("browser controls",async({page})=>{
//     await page.goto("https://www.google.com/")
//     console.log(await page.title());
    
// })


//to check the url



// import{test} from "@playwright/test"
// test("browser controls",async({page})=>{
//     await page.goto("https://www.google.com/")
//     console.log(await page.title());
//     console.log(await page.url());
    
    
// })

//to current cookies

// import{test} from "@playwright/test"
// test("browse controls",async ({browser})=>{
//     let context=await browser.newContext()
//     let page=await context.newPage
//     console.log(await context.cookies())
//     await page.goto("https://www.google.com")
// })

//chromium.launch

// import{chromium, test} from "@playwright/test"
// test("instance",async()=>{
//     let browser=await chromium.launch()
//    let context =await browser.newContext()
//  let page  =  await context.newPage()
//  await page.goto("https://www.google.com")
// })

//for firefox and webkit same this 



//6taking the screenshot

// import{test} from "@playwright/test"
// test("ss",async({page})=>{
//     await page.goto("https://www.google.com")
//     await page.screenshot({path:"screenshot/ss.png"})
// })

//multiple screenshot
// import{test} from "@playwright/test"
// test("ss",async({page})=>{
//     await page.goto("https://www.google.com")
//     await page.screenshot({path:"screenshot/ss.png"})
//     let time=new Date().getTime()
//     await page.screenshot({path:`acreenshot/-page-${time}.png`})
// })
