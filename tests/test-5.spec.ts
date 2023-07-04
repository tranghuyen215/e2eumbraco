import { test, expect } from '@playwright/test';

test('Test Edit Card successfully', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.locator('//tr[2]').getByRole('link', { name: 'Edit' }).click();
  await page.getByLabel('content').click();
  await page.getByLabel('content').fill('Verify defect 5');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('cell', { name: 'Card 4' }).click();
  await page.locator('//tr[2]/td[2]', { hasText: 'Verify defect 5' }).click();
});