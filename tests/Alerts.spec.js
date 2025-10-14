import { test, expect } from "@playwright/test";

test("Handle simple alerts", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

    //Handling alerts dailog

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain("alert")
        expect(dialog.message()).toContain("I am an alert box!")
        await dialog.accept()

    })

    //await page.getByTestId("alertBtn").click()

    await page.locator("//button[@id='alertBtn']").click()
})


test("Handle Confirmation alerts", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

    //Handling alerts dailog

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain("confirm")
        expect(dialog.message()).toContain("Press a button!")
        await dialog.accept()

       // await dialog.dismiss()

    })

    //await page.getByTestId("alertBtn").click()

    await page.locator("//button[@id='confirmBtn']").click()

    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!")
})

test("Handle prompt alert", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

     page.on('dialog', async dialog=>{
        
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        //checking the default value which are there in field
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John Test')

    })

    await page.locator("//button[@id='promptBtn']").click()
    expect(page.locator("//p[@id='demo']")).toHaveText("Hello John Test! How are you today?")
    await page.waitForTimeout(2000)

})