const {expect,test}=require ("@playwright/test")

test("Select multiple checkboxes and verify their states", async ({page})=>{

    await page.goto("https://www.qa-practice.com/elements/checkbox/single_checkbox")

    const checkboxes =[

        "//input[@name='checkboxes' and @value='one']",
        "//input[@name='checkboxes' and @value='two']",
        "//input[@name='checkboxes' and @value='three']"
    ];


    for( const checkbox of checkboxes) {
        await page.locator(checkbox).check();

        await page.waitForTimeout(5000)
    }

    for( const checkbox of checkboxes) {
        await expect(page.locator(checkbox)).toBeChecked();
    }

})