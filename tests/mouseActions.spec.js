const {test,expect}= require ('@playwright/test')

test("mouse actions",async ({page})=>{

    await page.goto("https://interflora-uk-tst.interflorabeta.co.uk/")

    await page.locator("#onetrust-accept-btn-handler").click()
    await page.waitForTimeout(2000)
    const occations=await page.locator("//span[text()='Occasions']")
    await occations.hover()
    await page.waitForTimeout(2000)
   
})

test.only("Mouse rightclick@mouse", async ({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    const rightclickButton=await page.locator("//span[text()='right click me']")

    await rightclickButton.click({button: "right"})

    await page.waitForTimeout(2000)
})