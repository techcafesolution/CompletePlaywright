const {test, expect}=require('@playwright/test');

test('Datepicker',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    //1st approach
    await page.fill('#datepicker','01/14/2025');
    //2nd approach
    const dd='29';
    const mm='Jun';
    const yyyy='2020';
    await page.locator('#txtDate').click();
    await page.click('.ui-datepicker-month');
    const months=await page.$$('.ui-datepicker-month option');
    for(const month of months){
        
        const text=await month.textContent();
        if(text.includes(mm)){
            console.log('Selectinng Month --> '+text);
            await page.selectOption('.ui-datepicker-month',text);
            break;
        }
    }

    await page.click('.ui-datepicker-year');
    const years=await page.$$('.ui-datepicker-year option');
    for(const year of years){
        const text=await year.textContent();
        if(text.includes(yyyy)){
            console.log("Selecting Year --> "+text);
            await page.selectOption('.ui-datepicker-year',text);
            break;
        }
    }

    const dates=await page.$$("//table[@class='ui-datepicker-calendar']//tbody//td//a");
    for(const date of dates){
        const text=await date.textContent();
        if(text.includes(dd)){
            console.log("Selecting Date --> "+text);
            await date.click();
        }
    }
    

    await page.waitForTimeout(2000);
});