import{test} from "@playwright/test"
import path from "path";
import fs from "fs"
// test("upload file",async ({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
    //=======to get current directory===========//
    console.log(__dirname);
    //=======attaching the file in the project folder==========//
    // await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../uploadfiles/aa.xlsx"))
    // await page.locator("#singleFileInput").setInputFiles("C:/Users/Kiran/Desktop/playwright/uploadfiles/aa.xlsx")
    // await page.waitForTimeout(3000)
    // await page.getByRole("button",{name:"Upload Single File"}).click()
    // await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/Kiran/Desktop/playwright/uploadfiles/aa.xlsx","C:/Users/Kiran/Desktop/playwright/uploadfiles/resume.txt"])
    // await page.getByRole("button",{name:"Upload Multiple Files"}).click()

    //=========upload a file from desktop============//
//singlr and multiple//
    // await page.locator("#singleFileInput").setInputFiles("c:/Users/Kiran/Desktop/New Text Document.txt")
    // //====removing attachfile from upload file in sile ==================//
    //     await page.locator("#singleFileInput").setInputFiles([])
    // await page.getByRole("button",{name:"Upload Single File"}).click()
    //     //==================for removing multiple file==============//
    // await page.locator('#multipleFilesInput').setInputFiles(["c:/Users/Kiran/Desktop/New Text Document.txt","c:/Users/Kiran/Desktop/New Microsoft Excel Worksheet.xlsx"])
    //   await page.locator('#multipleFilesInput').setInputFiles([])
    // await page.getByRole("button",{name:"Upload Multiple Files"}).click()
    // await page.waitForTimeout(3000)

    //============download file and save in folder in playwright===============//
    test("download file",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0",{waitUntil:"domcontentloaded"})
    await page.getByRole("textbox",{name:"Enter text here"}).fill("hello i am kiran")
    //==================save the file with diff file name============/
    await page.locator("#fileName").fill("newfile.txt")
    //========================================================//
    //      let[dowanloadfile]=await Promise.all([
    //   page.waitForEvent("download"),
    //  page.getByRole("button",{name:"download"}).click()])
    //  let downloadfolder="C:/Users/Kiran/Desktop/playwright/downloadedfile"

    //==============without promis.alll=================//
    let download=page.waitForEvent("download")
    await page.getByRole("button",{name:"Download"}).click()
    let downloadfile=await download
//==================================================================//
    //================download to desktop folder================//
    let downloadfolder="c:/Users/Kiran/Desktop/New folder"
    //=======================================================//
     let filename=dowanloadfile.suggestedFilename()
     await dowanloadfile.saveAs(path.join(downloadfolder,filename))
    //  await dowanloadfile.saveAs(path.join(downloadfolder,filename))
    let fullpath=path.join(downloadfolder,filename)
    //==============using dir name==============//
    // await dowanloadfile.saveAs(path.join(__dirname,"../../downloadedfile",filename))
    //=========================================================================//
//   console.log(await dowanloadfile.path())
    await page.waitForTimeout(3000)
    //verify if saved file is present are not
    if(fs.existsSync(fullpath)){
        console.log(`file exists: ${fullpath}`);
        
    }else{
        console.log(`no such file exits`);
        
    }
  
})