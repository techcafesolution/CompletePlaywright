const{test,expect,chromium}=require('@playwright/test');
test('MultiplePages',async ()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();

    const noOfPages= context.pages();
    console.log("Total number of pages:: "+noOfPages.length);

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{waitUntil:'load'});
    await expect(page1).toHaveTitle('OrangeHRM');
    await page1.getByRole('textbox',{name:'username'}).fill('Admin');
    await page1.waitForTimeout(2000);
    await page1.getByPlaceholder('Password').fill('admin123');
    await page1.waitForTimeout(2000);
    await page1.getByRole('button',{name:' Login '}).click();
    await page1.waitForTimeout(2000);
    await page1.close();

    await page2.goto('https://www.orangehrm.com/',{waitUntil:'load'});
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM');
    await page2.getByPlaceholder('Enter your email address here').fill('sanjeebavana@gmail.com');
    await page2.waitForTimeout(2000);
    await page2.close();
    

});

test.only('DemoPages',async ()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{waitUntil:'load'});
    await expect(page).toHaveTitle('OrangeHRM');
    const promisePage=context.waitForEvent('page');
    await page.getByRole('link',{name:'OrangeHRM, Inc'}).click();
    await page.waitForTimeout(2000);
    let allPages=context.pages();
    console.log('Number Of pages are-->'+allPages.length);
    const newPage=await promisePage;
    await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM');

    await newPage.getByPlaceholder('Enter your email address here').fill('example123@email.com');
    await newPage.waitForTimeout(2000);
    await newPage.close();
    await page.waitForTimeout(2000);
    await page.getByRole('textbox',{name:'username'}).fill('Admin');
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Password').fill('admin123');
    await page.waitForTimeout(2000);
    await page.getByRole('button',{name:' Login '}).click();
    await page.waitForTimeout(2000);
    await page.close();

});