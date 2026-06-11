import{test} from "@playwright/test"
import fs from "fs"
let datafile=fs.readFileSync("C:/Users/Kiran/Desktop/playwright/testData/singlesetdata.json")
let data=JSON.parse(datafile)
test.describe("grouping",async (params) => {
   let url=data.url
   let p=data.oassword
   let u=data.username
test(" ",async ({page}) => {
    await page.goto(url)
     await page.locator("input#username").fill(u)
   await page.locator("input#password").fill(p)
   await page.getByRole("button",{name:"Submit"}).click()
   let title=await page.title()
   // console.log(title)
   if(title=="Logged In Successfully | Practice Test Automation"){
      console.log("valid crediential");
      
   }else{
      console.log("invalid credential");
   }  
   test("    ",async ({page}) => {
    await page.goto(url)
     await page.locator("input#username").fill(u)
   await page.locator("input#password").fill(p)
   await page.getByRole("button",{name:"Submit"}).click()
   let title=await page.title()
   // console.log(title)
   if(title=="Logged In Successfully | Practice Test Automation"){
      console.log("valid crediential");
      
   }else{
      console.log("invalid credential");
   }  
   
})
   
})
      
   })