const {test,expect}= require ('@playwright/test')



test("iframe",async ({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html")
    const frames=pageawait .frames()
    console.log('The number of frames is: '+frames.length)

    //approch-method1

//    const frame1= await page.frame({url:'https://www.hyrtutorials.com/p/basic-controls.html'})
//    await frame1.fill('#firstName', 'John')

//    await page.waitForTimeout(2000)

   //Approch2- using frame locator
   
   const frame3=page.frameLocator('#frm3')

   await frame3.locator('#selectnav1').selectOption({ label: '-- Automation Testing' })

   await page.waitForTimeout(3000)

})

test.only('New applicaton',async ({page})=>{

    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/")

    const frames=await page.frames('#iFrame')

    console.log('The number of frames is: '+frames.length)

    await page.locator('(//li[@class="resp-tab-item"])[2]').click()

    await page.waitForTimeout(3000)

    const frame4=await page.frameLocator('#iFrame')

    await frame4.locator("//span[@id='current_filter']").hover()

   await page.waitForTimeout(3000)


})