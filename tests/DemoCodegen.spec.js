import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByPlaceholder('Enter Name').fill('Sanjeeb');
  await page.getByPlaceholder('Enter EMail').fill('sanjeebavana@gmail.com');
  await page.getByPlaceholder('Enter Phone').fill('9937552792');
  await page.getByLabel('Male', { exact: true }).check();
  await page.getByLabel('Country:').selectOption('australia');
});