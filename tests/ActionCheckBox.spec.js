const {test,expect}=require('@playwright/test');

test('DemoCheckBox',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const maleRadioBtn=page.locator('#male');
    await maleRadioBtn.click();
    await expect(maleRadioBtn).toBeChecked();
    expect.soft(await maleRadioBtn.isChecked()).toBeTruthy();
    
    const femaleRadioBtn=page.locator('#female');
    expect(await femaleRadioBtn.isChecked()).toBeFalsy();

    await page.waitForTimeout(3000);

});