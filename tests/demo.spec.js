// import { test, expect } from '@playwright/test';
// import { TIMEOUT } from 'node:dns';

// test('test', async ({ page }) => {
//   await page.goto('https://www.jio.com/',
//     {waitUntil: "domcontentloaded",timeout:3000})
// //   await page.waitForTimeout(30000)
//   await page.locator('#firstlevel-nav').getByLabel('Mobile').click();
//   await page.getByRole('button', { name: 'Recharge' }).first().click();
//   await page.getByTestId('JDSModalDesktopInternal-children-container').getByTestId('JDSInput-input').fill('');
//   await page.getByRole('button', { name: 'Close Modal' }).click();
//   await page.getByRole('listitem').filter({ hasText: 'Home' }).click();
//   await page.getByText('Unlock the best of JioHome with top plans₹599Bill Cycle ValidityUpto 30 Mbps').click();
//   await page.locator('div').filter({ hasText: /^₹599$/ }).nth(2).click();
//   await page.getByText('₹899').click();
//   await page.locator('div').filter({ hasText: /^₹1199$/ }).nth(2).click();
//   await page.getByRole('button', { name: 'View plan details for ₹599' }).click();
//   await page.getByRole('button', { name: 'Close Modal' }).click();
// });

import{test,expect} from '@playwright/test'
test('assertion',async(page)=>{
    await page.geolocation("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await expect(page.getByText('Add')).toBeAttached()
})