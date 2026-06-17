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
        /* FIX: wait for the button to exist before clicking */
        await expect(this.addAppointmentBtn).toBeVisible({ timeout: 15000 });
        await this.addAppointmentBtn.click();

        /* FIX: increased timeout for slow server */
        await expect(this.modal).toBeVisible({ timeout: 15000 });

        /* FIX: wait for patient dropdown to load its options */
        await this.patientDropdown.waitFor({ state: 'visible', timeout: 10000 });
    }

    async giveAppointment({ patientName, date }) {
        /* FIX: retry-aware option matching */
        let patientOptions = [];
        for (let attempt = 0; attempt < 3; attempt++) {
            patientOptions = await this.patientDropdown
                .locator('option')
                .allTextContents();
            if (patientOptions.length > 1) break;
            /* Wait for options to load if dropdown is empty */
            await this.page.waitForTimeout(1000);
        }

        const patientOption = patientOptions.find(
            o => o.trim().toLowerCase() === patientName.trim().toLowerCase()
        );

        if (!patientOption) {
            throw new Error(
                `Patient "${patientName}" not found in dropdown.\nAvailable options: ${patientOptions.join(', ')}`
            );
        }

        await this.patientDropdown.selectOption({ label: patientOption.trim() });

        /* FIX: format date as expected by OpenMRS datepicker */
        const formatted = new Date(date).toLocaleDateString('en-GB', {
            weekday: 'short',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });

        await this.dateInput.clear();
        await this.dateInput.fill(formatted);

        /* FIX: click modal title to dismiss the datepicker */
        await this.modal.locator('h3, h4, .modal-title').first().click();

        /* FIX: gracefully wait for datepicker to close */
        try {
            await this.page
                .locator('.datepicker-dropdown')
                .waitFor({ state: 'hidden', timeout: 5000 });
        } catch {
            /* datepicker may not be present — continue */
        }

        await this.submitBtn.scrollIntoViewIfNeeded();
        await expect(this.submitBtn).toBeEnabled({ timeout: 10000 });
        await this.submitBtn.click();

        /* FIX: wait for modal to close after submit */
        await expect(this.modal).toBeHidden({ timeout: 20000 });
    }

    async verifyAppointment(patientName) {
        const row = this.page
            .locator('table tbody tr')
            .filter({ hasText: patientName })
            .first();

        await expect(row).toBeVisible({ timeout: 15000 });
    }
}

export default AppointmentPage;