//import {test, expect, chromium} from ('@playwright/test');
const{test, expect, chromium}=require('@playwright/test');

test('CreateTwoPages', async ()=>{

    const browser=await chromium.launch();
    const context=await browser.newContext();

    const page1=await context.newPage();
    const page2=await context.newPage();

    const allPages= context.pages();

    console.log("No of pages are:: "+allPages.length);

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    await page1.waitForTimeout(2000);

    await page2.goto('https://www.orangehrm.com/');
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM');

    await page1.waitForTimeout(2000);
    await page2.close();
    await page1.close();

});

test.only('ShiwtchPage',async ()=>{
   
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');

    const newPage=context.waitForEvent('page');
    await page.getByRole('link',{name:'OrangeHRM, Inc'}).click();
    const page1=await newPage;
    await expect(page1).toHaveTitle('Human Resources Management Software | OrangeHRM');
    await page1.getByPlaceholder('Enter your email address here').fill('sanjeebavana@gmail.com');
    await page1.waitForTimeout(3000);
    await page1.close();
    await page.waitForTimeout(3000);
});