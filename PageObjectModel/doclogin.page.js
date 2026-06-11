import { expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
        this.page = page;

        this.emailInput = page.getByRole('textbox', {
            name: /email/i
        });

        this.passwordInput = page.locator(
            'input[type="password"]'
        );

        this.loginBtn = page.getByRole('button', {
            name: /login/i
        });

        this.welcomeText = page.getByText(
            /Welcome,/i
        );
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async login(email, password) {
        await expect(this.emailInput).toBeVisible();

        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);

        await this.loginBtn.click();

        await this.page.waitForURL(
            /.*doctor/,
            { timeout: 10000 }
        );
    }

    async verifyLogin() {
        await expect(this.welcomeText)
            .toBeVisible({ timeout: 10000 });
    }
}

export default LoginPage;