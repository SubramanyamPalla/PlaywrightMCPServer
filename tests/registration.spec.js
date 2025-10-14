const { test, expect } = require('@playwright/test');
const RegistrationPage = require('../pageObjects/RegistrationPage');
const registrationData = require('./fixtures/registrationData.json');
const fs = require('fs');
const path = require('path');

test.describe('User Account Management', () => {
    test('1.1 New User Registration', async ({ page }) => {
        // Create unique email for each test run to avoid duplicate registration
        const timestamp = new Date().getTime();
        registrationData.email = `john.doe${timestamp}@test.com`;
        
        // Store the updated credentials for future use
        const credentialsPath = path.join(__dirname, 'fixtures', 'latestCredentials.json');
        const credentials = {
            email: registrationData.email,
            password: registrationData.password
        };
        fs.writeFileSync(credentialsPath, JSON.stringify(credentials, null, 2));

        // Initialize page object
        const registrationPage = new RegistrationPage(page);

        // Navigate to the website
        await page.goto('https://tutorialsninja.com/demo/');

        // Navigate to registration page
        await registrationPage.navigateToRegister();

        // Fill in the registration form
        await registrationPage.fillRegistrationForm(registrationData);

        // Submit the registration
        await registrationPage.submitRegistration();

        // Verify success message
        const successMessage = await registrationPage.getSuccessMessage();
        expect(successMessage).toContain('Your Account Has Been Created!');

        // Additional verification: Check if we're on the success page
        expect(page.url()).toContain('/success');
    });
});
