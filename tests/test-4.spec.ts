import { test, expect } from '@playwright/test';

test('Test create card without card content', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: 'Create New' }).click();
  await page.getByLabel('name').click();
  await page.getByLabel('name').fill('Card 9');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('div').filter({ hasText: 'Card content must not be empty' }).nth(2).click();
});