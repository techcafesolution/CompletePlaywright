const{test,expect}=require('@playwright/test');

test('RightClickAction', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('button',{name:'start'}).click({button:'right'});
    await page.waitForTimeout(2000);

});