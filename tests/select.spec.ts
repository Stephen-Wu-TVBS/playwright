import { test, expect } from '@playwright/test';

test('select visible', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/html/select.html');
    // const combobox = page.getByRole('combobox');
    const combobox = page.locator('id=cars');
    await expect(combobox).toBeVisible();
    //await expect(combobox).toHaveValues([/R/, /G/]);
});