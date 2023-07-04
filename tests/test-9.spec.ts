import { test, expect } from '@playwright/test';

test('Test card detail', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.locator('//tr[2]').getByRole('link', { name: 'Detail' }).click();
  await page.getByText('Card 4').click();
  await page.getByText('Verify defect 4').click();
});