import { test } from '@playwright/test';
import LoginPage from '../PageObjectModel/doclogin.page.js';
import data from '../testData/openMRS.json' with { type: 'json' };

test('Debug - find all inputs on patient page', async ({ page }) => {
    test.setTimeout(120000);

    const login = new LoginPage(page);
    await login.goto(data.login.url);
    await login.login(data.login.email, data.login.password);

    // Navigate to patient page manually
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);

    // Click patient link
    await page.locator('a[href*="patient"]').first().click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000);

    console.log('\n========== PAGE URL ==========');
    console.log(page.url());

    console.log('\n========== ALL INPUT ELEMENTS ==========');
    const inputs = await page.locator('input').all();
    console.log(`Total inputs found: ${inputs.length}\n`);

    for (let i = 0; i < inputs.length; i++) {
        const type        = await inputs[i].getAttribute('type');
        const name        = await inputs[i].getAttribute('name');
        const id          = await inputs[i].getAttribute('id');
        const placeholder = await inputs[i].getAttribute('placeholder');
        const className   = await inputs[i].getAttribute('class');
        const isVisible   = await inputs[i].isVisible();
        console.log(`[${i}] type="${type}" | name="${name}" | id="${id}" | placeholder="${placeholder}" | class="${className}" | visible=${isVisible}`);
    }

    console.log('\n========== PAGE TITLE ==========');
    console.log(await page.title());

    // Keep browser open so you can inspect manually
    await page.pause();
});