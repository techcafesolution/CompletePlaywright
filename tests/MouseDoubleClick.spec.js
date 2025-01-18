const{test, expect}=require('@playwright/test');

test('DoubleClickAction', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('button',{name:'Copy Text'}).dblclick();
    await page.waitForTimeout(2000);
    const txtBox= page.locator('#field2');
    await expect(txtBox).toHaveValue('Hello World!');
    await page.waitForTimeout(2000);
});