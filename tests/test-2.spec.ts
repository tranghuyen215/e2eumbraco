import { test, expect } from '@playwright/test';

test('Test create card that name already existed', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: 'Create New' }).click();
  await page.getByLabel('name').click();
  await page.getByLabel('name').fill('Card 4');
  await page.getByLabel('content').click();
  await page.getByLabel('content').fill('Verify defect 4');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByText('Card Card 4 already existed').click();
});