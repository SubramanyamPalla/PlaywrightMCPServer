const { test, expect } = require('@playwright/test');
const InterfloraSignInPage = require('./pageObjects/InterfloraSignInPage');

test('Sign in to Interflora and get cookies', async ({ page, context }) => {
  const interfloraSignIn = new InterfloraSignInPage(page);

  // Step 1: Navigate to the sign-in page
  await interfloraSignIn.navigateToSignInPage();

  // Handle cookie banner before signing in
  await interfloraSignIn.handleCookieBanner();

  // Step 2: Enter username
  await interfloraSignIn.enterUsername('subramanyam.palla@interflora.co.uk');

  // Step 3: Enter password
  await interfloraSignIn.enterPassword('Test@123');

  // Step 4: Click on the Sign in button
  await interfloraSignIn.clickSignInButton();

  // Wait for navigation and cookies to be set
  await page.waitForTimeout(2000);

  // Get all cookies
  const cookies = await context.cookies();
  
  // Display cookies
  console.log('All Cookies:', JSON.stringify(cookies, null, 2));

  // Step 5: Verify that the username is displayed on the /account page
  await interfloraSignIn.verifyUsernameVisible('Subramanyam');
});
