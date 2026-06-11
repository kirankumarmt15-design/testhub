import{test} from "@playwright/test"
test("get by methods",async({page})=>{
    
// await page.goto("https://demo.nopcommerce.com/login?returnUrl=%2F")
//await page.getByLabel("Email:").fill("kirankur@gmail.com")



//-------------placeholder--------------------//
//await page.getByplaceholder("Search store").fill("computers")

//------------text-----------------------------------//
//await page.getByText("Electronics").first().cick()

//--------------alttext----------------------------
// await page.getByAltText("nopCommerce demo store",{exact:true}).click()

// await page.go("")
//})
//-----------------tittle---------------

//---------------------getbytestid------------------------------
await page.goto("https://www.saucedemo.com/")
await page.getByTestId("password").fill("cweuyg")
})