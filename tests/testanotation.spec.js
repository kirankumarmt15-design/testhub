// import {test} from "@playwright/test"
// test("test annotations", async ({page})=>{
//     console.log("test1");
    
// })
// test.skip("test 2", async ({})=>{
//     console.log("test 2");
  
    
// })
// test("test 3", async ({})=>{
//     console.log("test 3");
     
    
// })

//consitional skip
// import {test} from "@playwright/test"
// test("test annotations", async ({page})=>{
//     console.log("test1");
    
// })
// test.skip("test 2", async ({browserName})=>{
//      test.skip(browserName==="chromium")
  
    
// })
// test("test 3", async ({})=>{
//     console.log("test 3");
     
    
// })


//only test should execute
// import {test} from "@playwright/test"
// test.only("test annotations", async ({page})=>{
//     console.log("test1");
    
// })
// test.skip("test 2", async ({})=>{
//     console.log("test 2");
  
    
// })
// test("test 3", async ({})=>{
//     console.log("test 3");
     
    
// })



//to fail the test case
// import {test} from "@playwright/test"
// test.fail("test annotations", async ({page})=>{
  
//     await page.goto("agjvdwwubc")
    
// })
// test.skip("test 2", async ({})=>{
//     console.log("test 2");
  
    
// })
// test("test 3", async ({})=>{
//     console.log("test 3");
     
    
// })

//dont run   it fixme

// import {test} from "@playwright/test"
// test.fixme("test annotations", async ({page})=>{
  
//     await page.goto("agjvdwwubc")
    
// })
// test.skip("test 2", async ({})=>{
//     console.log("test 2");
  
    
// })
// test("test 3", async ({})=>{
//     console.log("test 3");
     
    
// })


//test.slow()

//  import { test } from "@playwright/test";

// test.slow("test annotations", async ({ page }) => {
//     console.log("test1");
// });

// test("test 2", async ({ page }) => {
//     console.log("test 2");
// });

// test("test 3", async ({ page }) => {
//     console.log("test 3");
// });




//test.describe(to create a group)

import { test } from "@playwright/test";

test.describe("login", () => {

    test("valid cred", async ({ browserName }) => {
        console.log("Running on:", browserName);
    });

    test.skip("test 2", async () => {
        console.log("test 2");
    });

    test("test 3", async () => {
        console.log("test 3");
    });

});