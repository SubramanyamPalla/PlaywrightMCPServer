import {test,expect} from '@playwright/test';
const AutomationExercisePage = require('./pageObjects/AutomationExercisePage');

test('Search for a product and verify results', async ({ page }) => {
  const automationExercise = new AutomationExercisePage(page);

  // Step 1: Navigate to home page
  await automationExercise.navigateToHomePage();

  // Step 2: Verify home page is visible
  await expect(page.locator('text=Home')).toBeVisible();

  // Step 3: Click on Products button
  await automationExercise.clickProductsButton();

  // Step 4: Verify user is navigated to ALL PRODUCTS page successfully
  await automationExercise.verifyAllProductsPageVisible();

  // Step 5: Enter product name in search input and click search button
  await automationExercise.searchProduct('Blue Top');

  // Step 6: Verify 'SEARCHED PRODUCTS' is visible
  await automationExercise.verifySearchedProductsVisible();
});
