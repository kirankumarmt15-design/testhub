import{test} from "@playwright/test"

test("elements wait",async({page})=>{
    // await page.goto("https://www.amazon.in")
    // await page.locator('input#twotabsearchtextbox').fill("shoes")
    // await page.waitForTimeout(2000)
    // await page.locator('//div[@role="row"]',{hasText:"for women"}).waitFor()
    //  let a=await page.locator('//div[@role="row"]').allTextContents()
    
    // console.log(a)

    //multiple element or  all links
await page.goto("https://www.jio.com/mobile/");
//   { waitUntil: "domcontentloaded" }//   await page.waitForTimeout(5000);
// let links = await page.$$('a');



await page.locator('//div[@class="css-195nmf8"]').first().waitFor({state:'visible'})
let links=await page.locator('//div[@class="css-195nmf8"]').all()

console.log(links);


for (let link of links) 
    {
      let text = await link.textContent();
        console.log(text)
}

// //waitForNavigation-------------//

// //getbyalttext-------------//

// // let logo=await page.getByAltText('500')
// // await expect(logo).toBeVisible()


//==============featchin all links==============//

// await page.goto("https://www.jio.com/mobile/");
// await page.locator('//div[@class="css-195nmf8"]').first().waitFor({state:'visible'})
// let links=await page.locator('//div[@class="css-195nmf8"]').all(
// console.log(links);
// for (let link of links) 
//     {
//       let text = await link.textContent();
//         console.log(text)
// }






        
    
})