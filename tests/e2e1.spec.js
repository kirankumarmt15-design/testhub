import{test} from '@playwright/test'
import landin from  "../PageObjectModel/landing.page"
import signup from '../PageObjectModel/signup.page.js'
    import signin from '../PageObjectModel/signin.page.js'
    import home from '../PageObjectModel/home.page'
    import createTicket from '../PageObjectModel/createTicket.page.js'
    import testdata from "../testData/e2e1.json"
test(" ",async ({page}) => {
    let url=testdata.url
    let name=testdata.name
    let email=testdata.email
    let password=testdata.password
    let repassword=testdata.repassword
    let contactno=testdata.cNo
    let subject=testdata.sub
    let des=testdata.des
       page.on("dialog",async (dialog) => {
        console.log(await dialog.message());
        await dialog.accept()
        
        
    })
    let landingpage=new landin(page)
    let signuppage=new signup(page)
    let signinpage=new signin(page)
    let homepage=new home(page)
    let createTicketpage=new createTicket(page)
    //launch url
await page.goto(url,{waitUntil:'domcontentloaded'})
await landingpage.signupLink.click()
    //pass name for nameTF
    await signuppage.nameTF.fill(name)
    //email TF
    await signuppage.emailTF.fill(email)
    //password TF
    await signuppage.passwordTF.fill(password)
    //Rr-password TF
    await signuppage.repasswordTF.fill(repassword)
    //contact no TF
    await signuppage.contactnoTF.fill(contactno)
    // gender radio buton
    await signuppage.maleRadio.click()
    // submit button
    await signuppage.submitButton.click()
    // alert popup
 
    //e-mail TF
    await signinpage.emailTF.fill(email)
    //password TF
    await signinpage.pwdTF.fill(password)
    //click on login
    await signinpage.loginButton.click()
    //creat ticket
    await homepage.createTicketLink.click()
    //add subject to sub TF
    await createTicketpage.subjectTF.fill(sub)
    //select option from task type dropdown
    await createTicketpage.TTDropdown.selectOption({value:"ot1"})
    //priority dropdown
    await createTicketpage.pDropdown.selectOption({value:"important"})
    //des textf
    await createTicketpage.descriptiontextarea.fill(des)
    //send button
    await createTicketpage.sendbutton()
    //alert --mess--accept
    //click on view ticket
    await homepage.viewTicketLink.click()
    //take ss 
    await page.screenshot({path:"screenshot/ticketss.png"})
})