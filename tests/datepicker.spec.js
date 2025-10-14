const {test, expect}=require ('@playwright/test')

test.skip('Handling date picker',async({page})=>{

    await page.goto('https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html')

    await page.fill('#datepicker','09/18/2025')

    await page.waitForTimeout(3000)
    
})

test('Handling date picker2',async({page})=>{

    await page.goto('https://www.hyrtutorials.com/p/calendar-practice.html')

    //await page.fill('#first_date_picker','09/18/2025')

    // Defined required variables
    const Year='2027'
    const month='March'
    const day='27'

    // Click on the date picker to open the calendar
    await page.click('#first_date_picker')

    //Declared while loop as always true
    while (true)
        
    {
        //Capturing the currentyear and month from the calendar
       const currentYear= await page.locator('.ui-datepicker-year').textContent()
       const currentMonth=await page.locator('.ui-datepicker-month').textContent()

        if(currentYear ==Year && currentMonth==month)
        {
            break;
        }

        await page.locator('[title="Next"]').click()
        
    }


    //Get all the days into an variable

    const days = await page.$$("//a[@class='ui-state-default']")

    for( const dt of days)
    {   
        if(await dt.textContent()== day)
        {
            await dt.click()
            break;
        }
        
    }
    
    await page.waitForTimeout(4000)
    
})
