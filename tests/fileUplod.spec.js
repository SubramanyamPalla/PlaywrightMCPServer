
const {test,expect}=require ("@playwright/test")

test("file upload test",async ({page})=>{

    await page.goto("https://demo.automationtesting.in/FileUpload.html")

    await page.waitForSelector("//input[@name='input4[]']/parent::div")

    //To upload a single file
    //await page.locator("//input[@name='input4[]']").setInputFiles('tests/uploadfile/ManualQA.pdf')
    
    //To upload a multiple  files
    await page.locator("//input[@name='input4[]']").setInputFiles(['tests/uploadfile/ManualQA.pdf','tests/uploadfile/Sindhuja.pdf'])

    await page.waitForTimeout(3000)

    //To remove the uploaded files
    await page.locator("//input[@name='input4[]']").setInputFiles([])
    await page.waitForTimeout(5000)
})