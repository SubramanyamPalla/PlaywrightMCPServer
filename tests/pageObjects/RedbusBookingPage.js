const { expect } = require('@playwright/test');

class RedbusBookingPage {
  constructor(page) {
    this.page = page;
    this.fromInput = page.locator('#src');
    this.toInput = page.locator('#dest');
    this.dateInput = page.locator('input[placeholder="Onward Date"]');
    this.searchButton = page.locator('button:has-text("Search Buses")');
    this.primoLabel = page.locator('div:has-text("Primo")');
    this.windowSeat = page.locator('.seat.available.window');
    this.boardingPointDropdown = page.locator('select#boardingPoint');
    this.dropPointDropdown = page.locator('select#droppingPoint');
    this.contactNumberInput = page.locator('input[name="mobileNo"]');
    this.passengerNameInput = page.locator('input[name="passengerName"]');
    this.passengerAgeInput = page.locator('input[name="passengerAge"]');
    this.passengerGenderMale = page.locator('input[value="MALE"]');
    this.redbusAssuranceCheckbox = page.locator('label:has-text("redBus Assurance") input[type="checkbox"]');
    this.proceedToPayButton = page.locator('button:has-text("Proceed to pay")');
  }

  async goto() {
    await this.page.goto('https://www.redbus.in/');
  }

  async searchBus(from, to, date) {
    await this.fromInput.fill(from);
    await this.page.keyboard.press('Enter');
    await this.toInput.fill(to);
    await this.page.keyboard.press('Enter');
    await this.dateInput.click();
    await this.page.locator(`td[aria-label*="${date}"]`).click();
    await this.searchButton.click();
  }

  async selectPrimoBus() {
    await this.primoLabel.first().click();
  }

  async selectWindowSeat() {
    await this.windowSeat.first().click();
  }

  async selectBoardingPoint(point) {
    await this.boardingPointDropdown.selectOption({ label: point });
  }

  async selectDropPoint(point) {
    await this.dropPointDropdown.selectOption({ label: point });
  }

  async fillContactNumber(number) {
    await this.contactNumberInput.fill(number);
  }

  async fillPassengerDetails(name, age, gender) {
    await this.passengerNameInput.fill(name);
    await this.passengerAgeInput.fill(age.toString());
    if (gender.toLowerCase() === 'male') {
      await this.passengerGenderMale.check();
    }
  }

  async setRedbusAssurance(addAssurance) {
    if (!addAssurance) {
      if (await this.redbusAssuranceCheckbox.isChecked()) {
        await this.redbusAssuranceCheckbox.uncheck();
      }
    }
  }

  async proceedToPay() {
    await this.proceedToPayButton.click();
  }
}

module.exports = RedbusBookingPage;
