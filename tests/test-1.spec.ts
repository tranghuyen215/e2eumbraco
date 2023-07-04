import { test, expect } from '@playwright/test';

test('Test create card successfully', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: 'Create New' }).click();
  await page.getByLabel('name').click();
  await page.getByLabel('name').fill('Card 5');
  await page.getByLabel('content').click();
  await page.getByLabel('content').fill('Verify defect 5');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('cell', { name: 'Card 5' }).click();
  await page.getByRole('cell', { name: 'Verify defect 5' }).click();
});