import { expect } from '@playwright/test';

export default class HomePage {

    constructor(page) {
        this.page               = page;
        this.patientSection     = page.locator('a[href*="patient"]').first();
        this.appointmentSection = page.locator('a[href*="appointment"]').first();
        this.addPatientBtn      = page.getByRole('button', { name: /Add Patient/i });
        this.select2Container   = page.locator('.select2-container').first();
        this.select2Input       = page.locator('input.select2-input').first();
    }

    async searchPatient(searchText) {
        await this.select2Container.waitFor({ state: 'visible', timeout: 20000 });
        await this.select2Container.click();
        await this.select2Input.waitFor({ state: 'visible', timeout: 10000 });
        await this.select2Input.clear();
        await this.select2Input.fill(searchText);
        await this.page.waitForTimeout(2000);
    }

    async openPatientSection() {
        await this.patientSection.click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForURL(/.*patient/, { timeout: 30000 });
        await this.select2Container.waitFor({ state: 'visible', timeout: 20000 });
    }

    async clickAddPatient() {
        await expect(this.addPatientBtn).toBeVisible({ timeout: 10000 });
        await this.addPatientBtn.click();
    }

    async openAppointmentList() {
        await this.appointmentSection.click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForURL(/.*appointment/, { timeout: 30000 });
    }
}