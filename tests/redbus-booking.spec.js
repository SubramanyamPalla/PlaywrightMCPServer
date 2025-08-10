const { test, expect } = require('@playwright/test');
const RedbusBookingPage = require('./pageObjects/RedbusBookingPage');
const testData = require('./fixtures/redbusTestData.json');

test('Book a bus ticket on Redbus', async ({ page }) => {
  const bookingPage = new RedbusBookingPage(page);

  // Step 1: Go to Redbus
  await bookingPage.goto();

  // Step 2: Search for buses
  await bookingPage.searchBus(testData.from, testData.to, testData.date);

  // Step 3: Select Primo label bus
  await bookingPage.selectPrimoBus();

  // Step 4: Select window seat
  await bookingPage.selectWindowSeat();

  // Step 5: Select boarding and drop points
  await bookingPage.selectBoardingPoint(testData.boardingPoint);
  await bookingPage.selectDropPoint(testData.dropPoint);

  // Step 6: Fill contact number
  await bookingPage.fillContactNumber(testData.contactNumber);

  // Step 7: Fill passenger details
  await bookingPage.fillPassengerDetails(testData.passenger.name, testData.passenger.age, testData.passenger.gender);

  // Step 8: Set redBus Assurance
  await bookingPage.setRedbusAssurance(testData.addAssurance);

  // Step 9: Proceed to pay
  await bookingPage.proceedToPay();

  // Add assertions as needed for booking confirmation
});
