const{test,expect}=require('@playwright/test');

test('KeyboardAction',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#name').click();
    await page.keyboard.type('AutomationTest');

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');

    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    await page.keyboard.press('Control+V');

    await page.waitForTimeout(4000);

});