const { expect } = require('@playwright/test');

class InterfloraSignInPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator('#email');
    this.passwordField = page.locator('#password');
    this.signInButton = page.locator('button[type="submit"]');
  }

  async navigateToSignInPage() {
    await this.page.goto('https://interflora-uk-tst.interflorabeta.co.uk/sign-in');
  }

  async enterUsername(username) {
    await this.usernameField.fill(username);
  }

  async enterPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }

  async handleCookieBanner() {
    const cookieBannerButton = this.page.locator('button:has-text("Accept All Cookies")');
    if (await cookieBannerButton.isVisible()) {
      await cookieBannerButton.click();
    }
  }

  async verifyUsernameVisible(username) {
    const usernameLocator = this.page.locator(`text=${username}`);
    await expect(usernameLocator).toBeVisible();
  }
}

module.exports = InterfloraSignInPage;
