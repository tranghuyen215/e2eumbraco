import { test, expect } from '@playwright/test';

test('Test Edit card without name', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.locator('//tr[2]').getByRole('link', { name: 'Edit' }).click();
  await page.getByLabel('name').click();
  await page.getByLabel('name').fill('');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Card name must not be empty').click();
});