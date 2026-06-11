export default class HomePage {

    constructor(page) {
        this.page               = page;
        this.patientSection     = page.locator('a[href*="patient"]').first();
        this.appointmentSection = page.locator('a[href*="appointment"]').first();
        this.addPatientBtn      = page.getByRole('button', { name: /Add Patient/i });
        this.searchBox          = page.locator('input[type="search"], input[placeholder*="Search"]').first();
    }

    async openPatientSection() {
        await this.patientSection.click();
        await this.page.waitForLoadState('domcontentloaded'); // ✅ NOT networkidle
        await this.page.waitForURL(/.*patient/, { timeout: 15000 });
    }

    async clickAddPatient() {
        await this.addPatientBtn.click();
    }

    async openAppointmentList() {
        await this.appointmentSection.click();
        await this.page.waitForLoadState('domcontentloaded'); // ✅ NOT networkidle
        await this.page.waitForURL(/.*appointment/, { timeout: 15000 });
    }
}