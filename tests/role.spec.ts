// @ts-check

import { test, expect } from '@playwright/test';

test('go to role website', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/html/role.html');
  const headingLocator = page.getByRole('heading', { name: 'Sign up' });
  await expect(headingLocator).toBeVisible();
  //await page.getByRole('checkbox', { name: 'Subscribe' }).check();
  //await page.getByRole('button', { name: /submit/i }).click();
});

test('get sign out', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/html/role.html');
  const selectLocator = page.getByRole('checkbox', { name: 'select me' });
  await expect(selectLocator).toBeVisible();
  //selectLocator.check();
  await selectLocator.click();
  await expect(selectLocator).toBeChecked(); 
  await selectLocator.hover();
  await selectLocator.focus();
  await selectLocator.click();
  await expect(selectLocator).not.toBeChecked();
  selectLocator.uncheck();
  await expect(selectLocator).not.toBeChecked();
});