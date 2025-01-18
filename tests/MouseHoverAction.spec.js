const{test,expect}=require('@playwright/test');

test('HoverAction', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByText('Point Me').hover();
    await page.waitForTimeout(3000);
    await page.getByRole('link', {name:'Mobiles'}).hover();
    await page.waitForTimeout(3000);
    await page.getByRole('link',{name:'Laptops'}).hover();
    await page.waitForTimeout(3000);

});