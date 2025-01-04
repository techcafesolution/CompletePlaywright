const{test,expect}=require('@playwright/test');

test('TestSoftAssertion',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //1. To have url
    await expect.soft(page).toHaveURL("https://testautomationpractice.blogspot.com/");
    //2. To have title
    await expect.soft(page).toHaveTitle("Automation Testing Practice");
    //3. To be visisble
    await expect.soft(page.locator('#name')).toBeVisible();
    //4. To be enable
    await expect.soft(page.locator("//input[@id='email']")).toBeEnabled();
    //5. To be disable
    await expect.soft(page.getByPlaceholder('Enter Phone')).not.toBeDisabled();
    //6. To have text
    await expect.soft(page.getByText('GUI Elements')).toHaveText('GUI Elements').then(await page.getByText('GUI Elements').click());
    //7. To have content text
    await expect.soft(page.getByText('GUI Elements')).toContainText('Elements');
    //8. To have value
    await page.locator('#name').fill('Ranjita');
    await expect.soft(page.locator('#name')).toHaveValue('Ranjita');
    //9. To have count
    await expect.soft(page.locator("//select[@id='country']//option")).toHaveCount(10);
    
});