import { expect } from '@playwright/test';

class AddPatientPage {
    constructor(page) {
        this.page = page;

        /* Modal container */
        this.modal = page.locator('#modal_ajax');

        /* Inputs scoped inside modal to avoid duplicates */
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
        /* FIX: increased timeout for slow server response */
        await expect(this.modal).toBeVisible({ timeout: 20000 });
    }

    async addPatient({ name, email, phone, gender, birthDate, bloodGroup, address }) {
        await this.verifyModalVisible();

        if (name) {
            await this.nameInput.waitFor({ state: 'visible', timeout: 10000 });
            await this.nameInput.clear();
            await this.nameInput.fill(name);
        }

        if (email) {
            await this.emailInput.clear();
            await this.emailInput.fill(email);
        }

        if (phone) {
            await this.phoneInput.clear();
            await this.phoneInput.fill(phone);
        }

        if (gender) {
            const genderLabel = gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();
            await this.sexDropdown.selectOption({ label: genderLabel });
        }

        if (birthDate) {
            await this.birthDateInput.fill(birthDate);

            /* FIX: click somewhere neutral to close the datepicker reliably */
            await this.modal.locator('h3, h4, .modal-title').first().click();

            /* FIX: wait for datepicker to fully close before moving on */
            try {
                await this.page
                    .locator('.datepicker-dropdown')
                    .waitFor({ state: 'hidden', timeout: 5000 });
            } catch {
                /* datepicker may not exist — continue */
            }
        }

        if (bloodGroup) {
            await this.bloodGroupDropdown.selectOption({ label: bloodGroup.trim() });
        }

        if (address) {
            await this.addressInput.clear();
            await this.addressInput.fill(address);
        }

        /* FIX: scroll into view and wait for button to be enabled */
        await this.saveButton.scrollIntoViewIfNeeded();
        await expect(this.saveButton).toBeEnabled({ timeout: 10000 });
        await this.saveButton.click();

        /* FIX: wait for modal to close after save */
        await expect(this.modal).toBeHidden({ timeout: 20000 });
    }
}

export default AddPatientPage;