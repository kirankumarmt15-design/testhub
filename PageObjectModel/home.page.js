class home{
    constructor(page){
        this.createTicketLink=page.locator('//a[href="dashboard.php" and text()="Create Ticket"]')
        this.viewTicketLink=page.locator('//a[href="dashboard.php" and text()="View Ticket"]')
    }
}
export default home