import{test} from "@playwright/test"
import fs from "fs"
let datafile=fs.readFileSync("C:/Users/Kiran/Desktop/playwright/testData/singlesetdata.json")
let data=JSON.parse(datafile)


test("get data from data",async({page})=>{
 
   await page.goto(data.url,{waitUntil:"domcontentloaded"})
   await page.locator("input#username").fill(data.username)
   await page.locator("input#password").fill(data.Password)
   await page.getByRole("button",{name:"Submit"}).click()
   let title=await page.title()
   // console.log(title)
   if(title=="Logged In Successfully | Practice Test Automation"){
      console.log("valid crediential");
      
   }else{
      console.log("invalid credential");
   }  
})
test.only("multiple set of data",async({page})=>{
   // data.forEach(d => {
   //    let url=d.url
   //    let username=d.username
   //    let Password=d.Password
   //    await page.got
      
   // });
   for(let testdata of data){
      let url=testdata.url
      let usn=testdata.username
      let psw=testdata.Password
      await page.goto(url,{waitUntil:'domcontentloaded'})
       await page.locator("input#username").fill(usn)
   await page.locator("input#password").fill(psw)
   await page.getByRole("button",{name:"Submit"}).click()
   let title=await page.title()
   // console.log(title)
   if(title=="Logged In Successfully | Practice Test Automation"){
      console.log("valid crediential");
      
   }else{
      console.log("invalid credential");
   }  
   }
})
test.only(" " ,async({page})=>{
   for(let key in data){
      console.log(key)
      for(let d of data[key]){
         await page.goto(d.url)
            await page.locator("input#username").fill(usn)
   await page.locator("input#password").fill(psw)
   await page.getByRole("button",{name:"Submit"}).click()
   let title=await page.title()
   // console.log(title)
   if(title=="Logged In Successfully | Practice Test Automation"){
      console.log("valid crediential");
      
   }else{
      console.log("invalid credential");
   }  
   }
      }
   
})