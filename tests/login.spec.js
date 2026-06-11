import{test} from "@playwright/test"
import loginpage from "../PageObjectModel/loginpage.page"
import  logindata from "../testData/logindata.json"
test("",async ({page}) =>{
let Linpage=new loginpage(page)
let url=logindata.url
let usn=logindata.usn
let pwd=logindata.pwd
    //launch url
    await page.goto(url,{waitUntil:'domcontentloaded'})
    //pass usn
    await Linpage.usernameTextfield.fill("usn")
    //pass pwd
    await Linpage.passwordTextfield.fill("pwd")
    //click on submit button
    await Linpage.submitButton.click()
    await page.waitForTimeout(3000)
})