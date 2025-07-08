const { test, expect } = require('@playwright/test');
const AutomationExercisePage = require('./pageObjects/AutomationExercisePage');

test('Navigate to Test Cases page', async ({ page }) => {
  const automationExercise = new AutomationExercisePage(page);

  // Step 1: Navigate to home page
  await automationExercise.navigateToHomePage();

  // Step 2: Verify home page is visible
  await expect(page.locator('text=Home')).toBeVisible();

  // Step 3: Click on Test Cases button
  await automationExercise.clickTestCasesButton();

  // Step 4: Verify user is navigated to test cases page successfully
  await automationExercise.verifyTestCasesPageVisible();
});
