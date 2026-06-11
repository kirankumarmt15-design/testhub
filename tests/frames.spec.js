import{test} from '@playwright/test'
test("frames",async({page})=>{
    await page.goto("https://ui.")
    //===========total frames==============//
   let frames =await page.frames()
   console.log(frames.length);
//    for(let frame of frames){
//     console.log(await frame.title());
    
//    }
// console.log(await page.title()); // first frame

})