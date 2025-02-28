// Organized test cases
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
test('User can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');
  expect(await page.isVisible('.inventory_list')).toBeTruthy();
});