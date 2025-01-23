const{test,expect,chromium}=require('@playwright/test');

test('LoginApp',async ()=>{
    const page=await (await (await chromium.launch()).newContext()).newPage();
    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{waitUntil:'load'});
    await expect(page).toHaveTitle('OrangeHRM');
    await page.getByRole('textbox',{name:'username'}).fill('Admin');
    await page.getByRole('textbox',{name:'password'}).fill('admin123');
    await page.getByRole('button',{name:' Login '}).click();

    await page.waitForTimeout(2000);

});