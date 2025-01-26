const{test,expect}=require('@playwright/test');

test('Annotation-1',async ({page, browserName})=>{
    // test.slow();
    if(browserName==='firefox'){
        test.skip;
    }
    test.setTimeout(10000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox',{name:'username'}).fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name:' Login '}).click();
    // await page.waitForTimeout(3000);
});