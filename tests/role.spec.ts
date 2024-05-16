// @ts-check

import { test, expect } from '@playwright/test';

test('go to role website', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/html/role.html');
  await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();

  await page.getByRole('checkbox', { name: 'Subscribe' }).check();

  await page.getByRole('button', { name: /submit/i }).click();
});