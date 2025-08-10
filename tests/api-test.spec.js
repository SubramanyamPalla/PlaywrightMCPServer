const { test, expect } = require('@playwright/test');

test('GET request to fetch all objects and validate response', async ({ request }) => {
  // Send GET request
  const response = await request.get('https://api.restful-api.dev/objects');
  
  // Check if status is 200
  expect(response.status()).toBe(200);
  
  // Get response body
  const responseBody = await response.json();
  
  // Ensure response body is an array
  expect(Array.isArray(responseBody)).toBeTruthy();
  
  // Log response details for verification
  console.log('Status Code:', response.status());
  console.log('Response Body Length:', responseBody.length);
  console.log('First item in response:', responseBody[0]);
});
