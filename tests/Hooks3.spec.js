const{test,expect}=require('@playwright/test');

let page;

test.beforeAll('Login', async ({browser})=>{
    page=await browser.newPage();
    //1. Launch URL
         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
         await expect(page).toHaveTitle('OrangeHRM');
     
         //2. Login Application
         await page.getByPlaceholder('Username').fill('Admin');
         await page.getByPlaceholder('Password').fill('admin123');
         await page.getByRole('button',{name:' Login '}).click();
         await page.waitForTimeout(3000);
});


test('Validate Home Page', async ()=>{
     //3. Varify Home page
     await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
     await page.locator("(//div[contains(@class, 'oxd-grid-3 orangehrm-quick-launch')]//child::button)[3]").click();
     await page.waitForTimeout(3000);
 
});

test('Validate Admin Page', async ()=>{
    //3. Validate Admin
    //await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
    await page.click("//span[text()='Admin']");
    await page.waitForTimeout(3000);
    await expect(page.locator("//h6[text()='Admin']")).toBeVisible();
    await expect(page.locator("//h6[text()='User Management']")).toBeAttached();
    await page.fill("(//input[@class='oxd-input oxd-input--active'])[2]",'Sanjeeb.dash');
    await page.click("((//div[@class='oxd-grid-item oxd-grid-item--gutters'])[2]//div)[3]");
    await page.locator("(//span[text()='Admin'])[2]").hover();
    await page.waitForTimeout(3000);
    await page.locator("(//span[text()='Admin'])[2]").click();
    await page.waitForTimeout(3000);

});

test.afterAll('Logout', async ()=>{
     //4. Logout Application
     await page.locator('.oxd-userdropdown-tab').click();
     await page.locator("//a[text()='Logout']").hover();
     await page.locator("//a[text()='Logout']").click();
     await page.waitForTimeout(3000);
})