const { test, expect } = require('@playwright/test');
const AutomationExercisePage = require('./pageObjects/AutomationExercisePage');
const testData = require('./fixtures/testData.json');

test.skip('Automation Exercise Signup Flow', async ({ page }) => {
  const automationExercise = new AutomationExercisePage(page);

  // Step 1: Navigate to home page
  await automationExercise.navigateToHomePage();

  // Step 2: Verify home page is visible
  await expect(page.locator('text=Home')).toBeVisible();

  // Step 3: Click on Signup / Login button
  await automationExercise.clickSignupLogin();

  // Step 4: Verify New User Signup is visible
  await automationExercise.verifyNewUserSignupVisible();

  // Step 5: Enter name and email address
  await automationExercise.fillSignupForm(testData.name, testData.email);

  // Step 6: Click Signup button
  await automationExercise.clickSignupButton();

  // Step 7: Verify ENTER ACCOUNT INFORMATION is visible
  await automationExercise.verifyAccountInfoVisible();

  // Step 8: Fill account details
  await automationExercise.fillAccountDetails(testData.details);

  // Step 9: Click Create Account button
  await automationExercise.clickCreateAccountButton();

  // Step 10: Verify ACCOUNT CREATED is visible
  await automationExercise.verifyAccountCreatedVisible();

  // Step 11: Click Continue button
  await automationExercise.clickContinueButton();

  // Step 12: Verify Logged in as username is visible
  await automationExercise.verifyLoggedInVisible();
});
