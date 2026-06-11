import { expect } from '@playwright/test';

class AppointmentPage {
    constructor(page) {
        this.page = page;

        this.addAppointmentBtn = page.getByRole('button', { name: /add appointment/i });

        this.modal = page.locator('.modal-content').filter({
            has: page.locator('select[name="patient_id"]')
        });

        this.patientDropdown = this.modal.locator('select[name="patient_id"]');
        this.dateInput       = this.modal.locator('input[name="date_timestamp"]');
        this.timeInput       = this.modal.locator('input[name="time_timestamp"]');
        this.submitBtn       = this.modal.locator('input[type="submit"]');
    }

    async openAppointmentPopup() {
        await this.addAppointmentBtn.click();
        await expect(this.modal).toBeVisible({ timeout: 5000 });
    }

    async giveAppointment({ patientName, date }) {
        const patientOptions = await this.patientDropdown.locator('option').allTextContents();
        const patientOption = patientOptions.find(o =>
            o.trim().toLowerCase() === patientName.trim().toLowerCase()
        );
        if (!patientOption) throw new Error(`Patient "${patientName}" not found. Available: ${patientOptions}`);
        await this.patientDropdown.selectOption({ label: patientOption.trim() });

        const formatted = new Date(date).toLocaleDateString('en-GB', {
            weekday: 'short', day: '2-digit', month: 'long', year: 'numeric'
        });
        await this.dateInput.fill(formatted);

        await this.modal.locator('h3, h4').first().click();
        await this.page.locator('.datepicker-dropdown').waitFor({ state: 'hidden' });

        await this.submitBtn.scrollIntoViewIfNeeded();
        await this.submitBtn.click();
    }

    async verifyAppointment(patientName) {
        // Use first() — multiple historical rows exist for this patient
        const row = this.page
            .locator('table tbody tr')
            .filter({ hasText: patientName })
            .first();

        await expect(row).toBeVisible({ timeout: 10000 });
    }
}

export default AppointmentPage;