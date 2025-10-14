const {test,expect} = require('@playwright/test');

test("Multiselect dropdown functionality",async ({page})=>{
   //Goto URL
  await page.goto("https://testing.qaautomationlabs.com/index.php")

  const element=await page.locator("//p[normalize-space()='Dropdown']").isVisible()

  if(element){
    await page.locator("//p[normalize-space()='Dropdown']").click();
  }

 
  //
  await page.selectOption("#countryDropdown",['India','UK','Canada'])

  await page.waitForTimeout(5000)
})