//const { expect } = require('@playwright/test');

const { expect } = require('@playwright/test');

class RudderstackPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.loginButton = page.locator('//span[normalize-space()="Log in"]/parent::button');
    this.connectionsTab = page.locator("//span[normalize-space()='Connections']/parent::a");
    this.dataPlaneUrl = page.locator("(//span[@class='ant-btn-icon'])[1]")
    this.jsSourceWriteKey = page.locator("(//*[@data-icon='copy'])[2]")
    this.destinationTab = page.locator("//span[normalize-space()='Destinations']/parent::a");
    this.destinationTest = page.locator("//tbody/tr[2]/td[1]");
    this.eventTab = page.locator("(//div[@role='tab'])[3]");
    this.deliveredCount = page.locator("(//span[normalize-space()='Delivered']/parent::div//span)[2]");
    this.failedCount = page.locator("(//span[normalize-space()='Failed']/parent::div//span)[2]");
    this.illdoitlater=page.locator('//a[@href="/addmfalater"]')
    this.gotodashboard=page.locator("//span[text()='Go to dashboard']/parent::button")
    this.askquestionclsbutton=page.locator('//button[@data-action="close"]')
  }

  async login(email, password) {
    await this.page.goto('https://app.rudderstack.com/');
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.illdoitlater.click();
    await this.gotodashboard.click();
    await this.askquestionclsbutton.click();

  }

  async goToConnections() {
    await this.connectionsTab.click();
  }

  async getDataPlaneUrl() {
    const dataPlaneUrl1 = await this.dataPlaneUrl.textContent();
    console.log('Data Plane URL:', dataPlaneUrl1);
    return dataPlaneUrl1;
  }

  async getWriteKey() {
    const writeKey = await this.jsSourceWriteKey.textContent();
    console.log('JS Source Write Key:', writeKey);
    return writeKey;
  }

  async goToDestination() {
    await this.destinationTab.click();
    await this.destinationTest.click();
  }

  async goToEventsTab() {
    await this.eventTab.click();
  }

  async getEventCounts() {
    const delivered = await this.deliveredCount.textContent();
     console.log(`Delivered Events: ${delivered}`);
    const failed = await this.failedCount.textContent();
     console.log(`Failed Events: ${failed}`);
    return { delivered, failed };
  }
}

module.exports = RudderstackPage;
