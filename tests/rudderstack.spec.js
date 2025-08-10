const { test, expect } = require('@playwright/test');
const RudderstackPage = require('../pageObjects/RudderstackPage');
require('dotenv').config();

test.only('Rudderstack workflow automation', async ({ page }) => {
  const rudderstack = new RudderstackPage(page);

  // Step 1 & 2: Login
  await rudderstack.login(process.env.DEV_EMAIL, process.env.DEV_PASSWORD);

  //await page.waitForTimeout(5000);
  //await page.pause()

  // Step 3: Navigate to connections
  await rudderstack.goToConnections();

  // Step 4: Read and store Data Plane URL
  const dataPlaneUrl = await rudderstack.getDataPlaneUrl();
  console.log('Data Plane URL:', dataPlaneUrl);

  // Step 5: Get Write Key of JS source
  const writeKey = await rudderstack.getWriteKey();
  console.log('Write Key:', writeKey);

  // Step 6: Go to destination tab and select DestinationTest
  await rudderstack.goToDestination();

  // Step 7: Go to event tab
  await rudderstack.goToEventsTab();

  // Step 8: Read delivered and failed event counts
  const { delivered, failed } = await rudderstack.getEventCounts();
  console.log('Delivered Events:', delivered);
  console.log('Failed Events:', failed);

  // Add assertions as needed
  expect(dataPlaneUrl).not.toBeNull();
  expect(writeKey).not.toBeNull();
});
