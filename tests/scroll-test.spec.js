import {test,expect} from '@playwright/test';
const AutomationExercisePage = require('./pageObjects/AutomationExercisePage');

test('Scroll down and up on the page', async ({ page }) => {
  const automationExercise = new AutomationExercisePage(page);

  // Step 1: Navigate to home page
  await automationExercise.navigateToHomePage();

  // Step 2: Verify home page is visible
  await expect(page.locator('text=Home')).toBeVisible();

  // Step 3: Scroll down page to bottom
  await automationExercise.scrollToBottom();

  // Step 4: Verify 'SUBSCRIPTION' is visible
  await automationExercise.verifySubscriptionVisible();

  // Step 5: Click on arrow at bottom right side to move upward
  await automationExercise.clickScrollUpArrow();

  // Step 6: Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible
  await automationExercise.verifyPracticeWebsiteTextVisible();
});
