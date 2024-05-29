import { test, expect } from '@playwright/test';

test('select visible', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/html/select.html');
    const combobox = page.getByRole('combobox');
    //const combobox = page.getByRole('option');
    // const combobox = page.locator('id=cars');
    //const combobox = page.getByTestId('123');
    await expect(combobox).toBeVisible();
    await combobox.selectOption('saab');
    await expect(combobox).toHaveValue('saab');
    await expect(combobox).not.toHaveValue('volvo');
});