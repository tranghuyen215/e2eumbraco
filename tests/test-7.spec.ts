import { test, expect } from '@playwright/test';

test('Test Edit card without content', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.locator('//tr[2]').getByRole('link', { name: 'Edit' }).click();
  await page.getByLabel('content').click();
  await page.getByLabel('content').fill('');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Card content must not be empty').click();
});