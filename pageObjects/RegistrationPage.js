class RegistrationPage {
    constructor(page) {
        this.page = page;
        
        // Locators
        this.myAccountDropdown = 'a.dropdown-toggle[title="My Account"]';
        this.registerLink = 'a[href$="register"]';
        this.firstNameInput = '#input-firstname';
        this.lastNameInput = '#input-lastname';
        this.emailInput = '#input-email';
        this.telephoneInput = '#input-telephone';
        this.passwordInput = '#input-password';
        this.passwordConfirmInput = '#input-confirm';
        this.newsletterRadioYes = 'input[name="newsletter"][value="1"]';
        this.newsletterRadioNo = 'input[name="newsletter"][value="0"]';
        this.privacyPolicyCheckbox = 'input[name="agree"]';
        this.continueButton = 'input[type="submit"][value="Continue"]';
        this.successMessage = '#content h1';
    }

    /**
     * Navigate to the registration page
     */
    async navigateToRegister() {
        await this.page.click(this.myAccountDropdown);
        await this.page.click(this.registerLink);
    }

    /**
     * Fill in the registration form
     * @param {Object} userData - User registration data
     */
    async fillRegistrationForm(userData) {
        await this.page.fill(this.firstNameInput, userData.firstName);
        await this.page.fill(this.lastNameInput, userData.lastName);
        await this.page.fill(this.emailInput, userData.email);
        await this.page.fill(this.telephoneInput, userData.telephone);
        await this.page.fill(this.passwordInput, userData.password);
        await this.page.fill(this.passwordConfirmInput, userData.password);
        
        // Select newsletter preference
        if (userData.newsletter.toLowerCase() === 'yes') {
            await this.page.click(this.newsletterRadioYes);
        } else {
            await this.page.click(this.newsletterRadioNo);
        }
        
        await this.page.click(this.privacyPolicyCheckbox);
    }

    /**
     * Submit the registration form
     */
    async submitRegistration() {
        await this.page.click(this.continueButton);
    }

    /**
     * Get the success message after registration
     * @returns {Promise<string>} The success message text
     */
    async getSuccessMessage() {
        return await this.page.textContent(this.successMessage);
    }
}

module.exports = RegistrationPage;
