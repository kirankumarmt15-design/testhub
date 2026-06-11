class signup{
    constructor(page){
  this.nameTF= page.locator("#name")
  this.emailTF=page.locator("#email")
  this.passwordTF=page.locator("#password")
  this.repasswordTF=page.locator("#cpassword")
  this.contactnoTF=page.locator("#txtpassword")
  this.maleRadio=page.locator('//input[@type="radio"  and @value="m"]')
  this.Fradio=page.locator('//input[@type="radio"  and @value="f"]')
  this.submitButton=page.getByRole("button",{name:"submit"})
    }
} 
export default signup