import { test, expect } from '@playwright/test';

test('purchase flow', async ({ page }) => {
  //  Open destination site
  await page.goto('https://www.saucedemo.com/',{waitUntil:'domcontentloaded'})
  //  Login Phase (Swapping out the failing textbox role match)
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.getByRole('button', { name: 'Login' }).click()
  // Find Backpack product container cleanly via component filtering
  let backpack = page.locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' })
  // Click Add to cart inside that isolated wrapper scope
  await backpack.getByRole('button', { name: 'Add to cart' }).click()
  //  Navigate to the checkout preview layout
  await page.locator('.shopping_cart_link').click()
  //  Execute resilient web-first assertions
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible()
  await expect(page.locator('.cart_quantity')).toHaveText('1')
})