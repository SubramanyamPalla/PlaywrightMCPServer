const AutomationExercisePage = require('../pageObjects/AutomationExercisePage');
const testData = require('../fixtures/testData.json');

/**
 * Logs in to the application and persists the session.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 */
async function loginAndPersistSession(page) {
  const automationExercise = new AutomationExercisePage(page);

  // Navigate to home page
  await automationExercise.navigateToHomePage();

  // Click on Signup / Login button
  await automationExercise.clickSignupLogin();

  // Perform login
  await automationExercise.login(testData.email, testData.password);

  // Save session state
  await page.context().storageState({ path: 'session.json' });
}

/**
 * Loads the persisted session.
 * @param {import('@playwright/test').BrowserContext} context - The Playwright browser context.
 */
async function loadSession(context) {
  await context.addCookies(require('../../session.json'));
}

module.exports = { loginAndPersistSession, loadSession };
