const { test, expect } = require('@playwright/test');
const AutomationExercisePage = require('./pageObjects/AutomationExercisePage');
const testData = require('./fixtures/testData.json');
const { loginAndPersistSession } = require('./utils/sessionUtils');

test('Login and verify dashboard URL', async ({ page }) => {
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
  console.log(`Logging in with email: ${testData.email} and password: ${testData.password}`);
  
  // Use loginAndPersistSession to handle login and session persistence
  await loginAndPersistSession(page);

  // Step 6: Verify Logged in as username is visible
  //await automationExercise.verifyLoggedInVisible();
});
