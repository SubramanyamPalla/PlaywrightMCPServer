//const { test, expect } = require('@playwright/test');
import {test,expect} from '@playwright/test';
class AutomationExercisePage {
  constructor(page) {
    this.page = page;
    this.signupLoginButton = page.locator('text=Signup / Login');
    this.newUserSignupText = page.locator('text=New User Signup!');
    this.nameField = page.locator('input[name="name"]');
    this.emailField = page.locator('input[name="email"]');
    this.signupButton = page.locator('button[type="submit"]');
    this.accountInfoText = page.locator('text=ENTER ACCOUNT INFORMATION');
    this.titleRadioButton = page.locator('input[name="title"]');
    this.passwordField = page.locator('input[name="password"]');
    this.newsletterCheckbox = page.locator('input[name="newsletter"]');
    this.specialOffersCheckbox = page.locator('input[name="special_offers"]');
    this.createAccountButton = page.locator('button[type="submit"]');
    this.accountCreatedText = page.locator('text=ACCOUNT CREATED!');
    this.continueButton = page.locator('button[type="button"]');
    this.loggedInText = page.locator('text=Logged in as Subramanyam Palla');
    this.loginToAccountText = page.locator('text=Login to your account');
    this.loginButton = page.locator('button:text("Login")');
    this.loginEmailField = page.locator('form:has-text("Login") input[name="email"]');
    this.loginPasswordField = page.locator('form:has-text("Login") input[name="password"]');
    this.testCasesButton = page.locator('(//a[@href="/test_cases"])[1]');
    this.testCasesPageHeader = page.locator('(//a[@href="/test_cases"])[1]');
    this.productsButton = page.locator('a[href="/products"]');
    this.allProductsHeader = page.locator('h2:has-text("All Products")');
    this.productsList = page.locator('div[class="features_items"]');
    this.firstProductViewButton = page.locator("a[href='/product_details/1']").first();
    this.productDetails = {
      name: page.locator("div[class='product-information'] h2"),
    //   category: page.locator('.product-details .category'),
    //   price: page.locator('.product-details .price'),
    //   availability: page.locator('.product-details .availability'),
    //   condition: page.locator('.product-details .condition'),
    //   brand: page.locator('.product-details .brand')
    }
    this.searchInput = page.locator('input[name="search"]');
    this.searchButton = page.locator("//button[@id='submit_search']");
    this.searchedProductsHeader = page.locator('h2:has-text("Searched Products")');
    this.searchedProductsList = page.locator('.searched-products .product-item');
    this.logoutButton = page.locator("//a[@href='/logout']");
    this.subscriptionText = page.locator('text=SUBSCRIPTION');
    this.scrollUpArrow = page.locator('css=a[href="#top"]');
    this.practiceWebsiteText = page.locator('h2:has-text("Full-Fledged practice website for Automation Engineers")').first();
  }

  async navigateToHomePage() {
    await this.page.goto('http://automationexercise.com');
  }

  async clickSignupLogin() {
    await this.signupLoginButton.click();
  }

  async verifyNewUserSignupVisible() {
    await expect(this.newUserSignupText).toBeVisible();
  }

  async fillSignupForm(name, email) {
    await this.nameField.fill(name);
    await this.emailField.fill(email);
  }

  async clickSignupButton() {
    await this.signupButton.click();
  }

  async verifyAccountInfoVisible() {
    await expect(this.accountInfoText).toBeVisible();
  }

  async fillAccountDetails(details) {
    await this.titleRadioButton.check();
    await this.passwordField.fill(details.password);
    await this.newsletterCheckbox.check();
    await this.specialOffersCheckbox.check();
    // Fill other details as needed
  }

  async clickCreateAccountButton() {
    await this.createAccountButton.click();
  }

  async verifyAccountCreatedVisible() {
    await expect(this.accountCreatedText).toBeVisible();
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async verifyLoggedInVisible() {
    await expect(this.loggedInText).toBeVisible();
  }

  async verifyLoginToAccountVisible() {
    await expect(this.loginToAccountText).toBeVisible();
  }

  async login(email, password) {
    await this.loginEmailField.fill(email);
    await this.loginPasswordField.fill(password);
    await this.loginButton.click();
    await this.page.waitForTimeout(5000); // Wait for 5 seconds to ensure fields are filled
  }

  async clickTestCasesButton() {
    await this.testCasesButton.click();
  }

  async verifyTestCasesPageVisible() {
    await this.page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page loads
    await expect(this.testCasesPageHeader).toBeVisible();
  }

  async clickProductsButton() {
    await this.productsButton.click();
  }

  async verifyAllProductsPageVisible() {
    await expect(this.allProductsHeader).toBeVisible();
  }

  async verifyProductsListVisible() {
    await expect(this.productsList).toBeVisible();
  }

  async clickViewFirstProduct() {
    await this.firstProductViewButton.click();
  }

  async verifyProductDetailsVisible() {
    for (const detail in this.productDetails) {
      await expect(this.productDetails[detail]).toBeVisible();
    }
 }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
    await this.page.waitForTimeout(2000)
  }

  async verifySearchedProductsVisible() {
    await expect(this.searchedProductsHeader).toBeVisible();
    //await expect(this.searchedProductsList).toBeVisible();
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }

  async verifyLoginPageVisible() {
    await expect(this.loginToAccountText).toBeVisible();
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async verifySubscriptionVisible() {
    await expect(this.subscriptionText).toBeVisible();
  }

  async clickScrollUpArrow() {
    await this.scrollUpArrow.click();
  }

  async verifyPracticeWebsiteTextVisible() {
    await expect(this.practiceWebsiteText).toBeVisible();
  }

  async increaseProductQuantity(quantity) {
    const quantityField = this.page.locator('input[type="number"]');
    await quantityField.fill(quantity.toString());
  }

  async clickAddToCartButton() {
    const addToCartButton = this.page.locator('button:has-text("Add to cart")');
    await addToCartButton.click();
  }

  async clickViewCartButton() {
    const viewCartButton = this.page.locator('a:has-text("View Cart")');
    await viewCartButton.click();
  }

  async verifyProductQuantityInCart(expectedQuantity) {
    const quantityLocator = this.page.locator(`text=${expectedQuantity}`);
    await expect(quantityLocator).toBeVisible();
  }
}

module.exports = AutomationExercisePage;
