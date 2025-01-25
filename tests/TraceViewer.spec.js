const{test,expect}=require('@playwright/test');

test('DemoTraceViwer',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{waitUntil:'load'});

    await page.getByRole('textbox',{name: 'username'}).fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.click("//button[@type='submi']");   
    await page.waitForTimeout(2000);
});