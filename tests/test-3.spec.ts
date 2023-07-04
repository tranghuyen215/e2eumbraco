import { test, expect } from '@playwright/test';

test('Test create card name empty', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: 'Create New' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByText('Card name must not be empty').click();
});