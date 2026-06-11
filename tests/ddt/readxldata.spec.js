import {test} from "@playwright/test"
import excel from 'exceljs'
import path from "path"
test("read single data",async({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/newex (2).xlsx"))
    let sheet=await book.getWorksheet("Sheet1")
//    let data= await sheet.getRow(1).getCell(1)
//==========to get only data covert all typ data into string=================//
//   let data= await sheet.getRow(1).getCell(1).toString()

//===========to get exact data==========================//
let data= await sheet.getRow(1).getCell(1).value
   console.log(data)
})

test("read multiple data",async({page})=>{
 let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/newex (2).xlsx"))
    let sheet=await book.getWorksheet("Sheet2")
    for(let row=1;row<=sheet.actualRowCount;row++){
        for(let c=1;c<=sheet.actualColumnCount;c++){
            let data=sheet.getRow(row).getCell(c).toString()
            console.log(data);
            
        }
    }
})
//

test.only("pass test data to app",async({page})=>{
 let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/excel.xlsx"))
        let sheet=await book.getWorksheet("Sheet3")
        let alldata=[]
        for(let r=1;r<=sheet.actualColumnCount;r++){
            let row=sheet.getRow(r)
          let url=  row.getCell(1).toString()
          let usn= row.getCell(2).toString()
          let psw= row.getCell(3).toString()
          alldata.push({url:url,usn:usn,psw:psw})
          console.log(alldata);
          for(let d of alldata){
            await page.goto(d.url)
            await page.getByRole("textbox",{name:"email"}).fill(d.usn)
            await page.getByLabel("Password").fill(d.psw)
           await page.getByRole("button", { name: "Log in" }).click();
           await page.close()
          }
        }


})