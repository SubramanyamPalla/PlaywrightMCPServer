
const {expect}=require ("@playwright/test")

class MultipleCheckboxSelect {

    constructor (page) {
        this.page=page;

        this.checkboxone=page.locator("//input[@name='checkboxes' and @value='one']")
        this.checkboxtwo=page.locator("//input[@name='checkboxes' and @value='two']")
        this.checkboxthree=page.locator("//input[@name='checkboxes' and @value='three']")
    }



    
}
module.exports=MultipleCheckboxSelect;