import { expect } from '@playwright/test';

class AddPatientPage {
    constructor(page) {
        this.page = page;

        // Modal
        this.modal = page.locator('#modal_ajax');

        // Inputs — scoped inside modal to avoid picking up duplicates
        this.nameInput          = this.modal.locator('input[name="name"]');
        this.emailInput         = this.modal.locator('input[name="email"]');
        this.phoneInput         = this.modal.locator('input[name="phone"]');
        this.birthDateInput     = this.modal.locator('input[name="birth_date"]');
        this.addressInput       = this.modal.locator('input[name="address"], textarea[name="address"]');
        this.sexDropdown        = this.modal.locator('select[name="sex"]');
        this.bloodGroupDropdown = this.modal.locator('select[name="blood_group"]');
        this.saveButton         = this.modal.locator('input[type="submit"], button[type="submit"]');
    }

    async verifyModalVisible() {
        await expect(this.modal).toBeVisible({ timeout: 10000 });
    }

    async addPatient({ name, email, phone, gender, birthDate, bloodGroup, address }) {
        await this.verifyModalVisible();

        if (name)  await this.nameInput.fill(name);
        if (email) await this.emailInput.fill(email);
        if (phone) await this.phoneInput.fill(phone);

        if (gender) {
            const genderLabel = gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();
            await this.sexDropdown.selectOption({ label: genderLabel });
        }

        if (birthDate) {
            await this.birthDateInput.fill(birthDate);
            // Click the modal heading to dismiss the datepicker
            await this.modal.locator('h3, h4').first().click();
            await this.page.locator('.datepicker-dropdown').waitFor({ state: 'hidden' });
        }

        if (bloodGroup) {
            await this.bloodGroupDropdown.selectOption({ label: bloodGroup.trim() });
        }

        if (address) await this.addressInput.fill(address);

        // Scroll submit button into view and click
        await this.saveButton.scrollIntoViewIfNeeded();
        await this.saveButton.click();
    }
}

export default AddPatientPage;