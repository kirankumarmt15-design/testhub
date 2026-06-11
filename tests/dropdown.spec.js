import{expect,test} from '@playwright/test'
test('dropdowns',async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // await page.locator('#select3')
    //selectOption()
    // await page.locator('#select3').selectOption({value:'United Kingdom'}) //select through value
    // await page.locator('#select3').selectOption({label:'United Kingdom'}) //select through label
    // await page.locator('#select3').selectOption({index:6}) //select using index
    // await page.locator('#select3').selectOption('India') //by using visible text
    // await page.waitForTimeout(5000)


    //===========multiple select==========//
//     await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1',{waitUntil:'domcontentloaded'})
//     // await page.locator('#select-multiple-native').selectOption([
//     //     {value:"Mens Casual Premium Slim Fit T-Shirts "},{value:"White Gold Plated Princess"}])
// await page.locator('#select-multiple-native').selectOption([{index:1},{index:3}]) //multi select by index

//     await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
// await page.waitForTimeout(2000)

//======custom dropdown===========//
await page.goto("https://www.amazon.in/s?k=shoes&crid=2BB2S23DCMK1R&sprefix=shoes%2Caps%2C1196&ref=nb_sb_noss_2",{waitUntil:'domcontentloaded'})
await page.locator('#-result-sort-select').click({force:true})
let option=await page.locator('//a[@class="a-dropdown-link"]').all()
for(let option of options){
    let text=await option.textcontent()
    if(text.includes('Best')){
        await option.click()
    }
}



})
