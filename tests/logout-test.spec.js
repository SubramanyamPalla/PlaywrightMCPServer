const { test, expect } = require('@playwright/test');
const AutomationExercisePage = require('./pageObjects/AutomationExercisePage');
const testData = require('./fixtures/testData.json');

test.only('Login and Logout flow', async ({ page }) => {
  const automationExercise = new AutomationExercisePage(page);

  // Step 1: Navigate to home page
  await automationExercise.navigateToHomePage();

  // Step 2: Verify home page is visible
  await expect(page.locator('text=Home')).toBeVisible();

  // Step 3: Click on Signup / Login button
  await automationExercise.clickSignupLogin();

  // Step 4: Verify Login to your account is visible
  await automationExercise.verifyLoginToAccountVisible();

  // Step 5: Enter email and password
  await automationExercise.login(testData.email, testData.password);

  // Step 6: Verify Logged in as username is visible
  await automationExercise.verifyLoggedInVisible();

  // Step 7: Click Logout button
  await automationExercise.clickLogoutButton();

  await page.waitForTimeout(2000);
  // Step 8: Verify user is navigated to login page
  await automationExercise.verifyLoginPageVisible();
});
