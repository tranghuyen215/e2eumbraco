import { test, expect } from '@playwright/test';

test('Test delete card', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.locator('//tr[3]').getByRole('link', { name: 'Delete' }).click();
});