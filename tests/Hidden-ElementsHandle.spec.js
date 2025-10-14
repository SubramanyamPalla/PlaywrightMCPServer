const {test, expect} = require('@playwright/test');

test.only("Hidden elemnets handle",async ({page})=>{

  await page.setViewportSize({ width: 1280, height: 720 })

    let success=await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    expect(success).toBeTruthy()

    let username= page.locator('//input[@placeholder="Username"]')

        // check if editable
      if (await username.isEditable()) {
        await username.clear();
        await username.fill('Admin');
        }
       await  page.locator('//input[@placeholder="Password"]').fill('admin123')
        //await page.waitForTimeout(30000)

       await page.locator('//button[@type="submit"]').click()
       await page.waitForTimeout(300)

       await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
    
       await page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[3]").click()

       await page.waitForTimeout(3000)

       const options= await page.$$("//div[@role='listbox']//span")

       for (let option of options) {

            const jobTitle = await option.textContent()
            //console.log(jobTitle)

            if(jobTitle.includes("QA Engineer"))
            {
              await option.click()
              break
            }
       }

       await page.waitForTimeout(3000)
})