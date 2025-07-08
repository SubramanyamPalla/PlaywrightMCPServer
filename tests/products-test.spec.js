
import {test,expect} from '@playwright/test';
const AutomationExercisePage = require('./pageObjects/AutomationExercisePage');

test('Navigate to Products page and verify product details', async ({ page }) => {
  const automationExercise = new AutomationExercisePage(page);

  // Step 1: Navigate to home page
  await automationExercise.navigateToHomePage();

  // Step 2: Verify home page is visible
  await expect(page.locator('text=Home')).toBeVisible();

  // Step 3: Click on Products button
  await automationExercise.clickProductsButton();

  // Step 4: Verify user is navigated to ALL PRODUCTS page successfully
  await automationExercise.verifyAllProductsPageVisible();

  // Step 5: Verify the products list is visible
  await automationExercise.verifyProductsListVisible();

  // Step 6: Click on View Product of first product
  await automationExercise.clickViewFirstProduct();

  // Step 7: Verify product details are visible
  await automationExercise.verifyProductDetailsVisible();
});
