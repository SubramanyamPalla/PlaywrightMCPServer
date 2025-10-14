const {test,expect}=require ("@playwright/test")

test("drag and drop test",async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Static.html")

    const source=await page.locator("//img[@id='mongo']")

    const destination=await page.locator("//div[@id='droparea']")
    
    //Approch1
    //await source.dragTo(destination)

    //Approch2
    await source.hover()
    await page.mouse.down()
    await destination.hover()
    await page.mouse.up()

    await page.waitForTimeout(3000)


})