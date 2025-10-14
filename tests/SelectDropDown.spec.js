const {test, expect} =require ("@playwright/test")

test("Select an option from a dropdown",async ({page})=>{

    await page.goto("https://www.qa-practice.com/elements/select/single_select")

    //Multiple ways to select an option
    //await page.locator("#id_choose_language").selectOption({value:'2'})
    //await page.locator("#id_choose_language").selectOption({label:'Ruby'})
    //await page.locator("#id_choose_language").selectOption({index:1});

//Assertions

    //Approch1
    // const options= await page.locator("#id_choose_language option")
    // await expect(options).toHaveCount(6)

    //Approch2- Get all the dropdown options into a variable

    // const opitonsvalues=await page.$$("#id_choose_language option")
    // console.log("Options names:", opitonsvalues.length)
    // for(let i=0;i<opitonsvalues.length;i++){
    //     const optionText=await opitonsvalues[i].textContent()
    //     console.log("Option text:",optionText)
    //     // if(optionText==="JavaScript"){
    //     //     await opitonsvalues[i].click()
    //     //     break
    //     //}
    // }

    const opitonsvalues=await page.$$("#id_choose_language option")
    let status=false
    for(const content of opitonsvalues){
        //console.log(await content.textContent())

        const value=await content.textContent()

        if(value.includes("Java"))
        {
            status=true;
            break;
        }

    }
    expect(status).toBeTruthy()



    })