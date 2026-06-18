import { test } from '@playwright/test';
import LoginPage from '../PageObjectModel/doclogin.page.js';
import data from '../testData/openMRS.json' with { type: 'json' };

test('OpenMRS Login', async ({ page }) => {

    const login = new LoginPage(page);

    // Navigate to Login Page
    await login.goto(data.login.url);

    // Login
    await login.login(
        data.login.email,
        data.login.password
    );

    // Verify Login
    await login.verifyLogin();

    console.log('Login successful');
});