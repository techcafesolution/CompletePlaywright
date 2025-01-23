const{test, expect, chromium}=require('@playwright/test');

test('HandleWindows_1',async ()=>{

    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();

    const pages=context.pages();
    expect(pages.length).toBe(2);
    console.log("Total number of page-->"+pages.length);
    
    await page1.goto('https://demo.opencart.com/',{waitUntil:'load'});
    await expect(page1).toHaveTitle('Your Store');
    await page1.waitForTimeout(3000);
    await page2.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'load'});
    await expect(page2).toHaveTitle('Automation Testing Practice');
    await page2.waitForTimeout(3000);
});

test('HandleWindows',async ()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle('Automation Testing Practice');

    const promisePage=context.waitForEvent('page');
    await page.getByRole('button',{name:'New Tab'}).click();
    const newPage=await promisePage;
    await expect(newPage).toHaveURL('https://demo.opencart.com/');
    await expect(newPage).toHaveTitle('Your Store');
    await newPage.waitForTimeout(2000);
    
    await page.getByPlaceholder('Enter Name').fill('Sanjeeb');
    await page.getByPlaceholder('Enter Name').highlight();
    await page.waitForTimeout(3000);

    await newPage.close();
    await page.waitForTimeout(3000);
    await page.close();
});