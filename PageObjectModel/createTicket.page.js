class createTicket{
    constructor(page){
        this.subjectTF=page.locator("#subject")
        this.TTDropdown=page.locator('//select[@name="tasktype"]')
        this.pDropdown=page.locator('//select[@name="priority"]')
        this.descriptiontextarea=page.locator('//textarea[@name="description"]')
        this.sendbutton=page.locator('//input[@class="btn btn-primary pull-right"]')
    }
}
export default createTicket