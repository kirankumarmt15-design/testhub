import { expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
        this.page = page;

        this.emailInput = page.getByRole('textbox', { name: /email/i });
        this.passwordInput = page.locator('input[type="password"]');
        this.loginBtn = page.getByRole('button', { name: /login/i });
        this.welcomeText = page.getByText(/Welcome,/i);
    }

    async goto(url) {
        /* FIX: wait for full DOM before interacting — critical for WebKit */
        await this.page.goto(url, {
            waitUntil: 'domcontentloaded',
            timeout: 60000,
        });

        /* FIX: wait for login form to actually appear before proceeding */
        await this.emailInput.waitFor({ state: 'visible', timeout: 30000 });
    }

    async login(email, password) {
        await expect(this.emailInput).toBeVisible({ timeout: 20000 });

        /* FIX: clear before fill to avoid stale values from previous runs */
        await this.emailInput.clear();
        await this.emailInput.fill(email);

        await this.passwordInput.clear();
        await this.passwordInput.fill(password);

        /* FIX: wait for button to be enabled before clicking */
        await expect(this.loginBtn).toBeEnabled({ timeout: 10000 });
        await this.loginBtn.click();

        /* FIX: extended timeout for slow OpenMRS server */
        await this.page.waitForURL(/.*doctor/, { timeout: 60000 });

        /* FIX: ensure the page has settled after redirect */
        await this.page.waitForLoadState('domcontentloaded');
    }

    async verifyLogin() {
        await expect(this.welcomeText).toBeVisible({ timeout: 15000 });
    }
}

export default LoginPage;