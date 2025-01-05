const{test, expect}=require('@playwright/test');

test('Handling_CheckBox',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

//1st Approach
let checkBox=page.locator('#monday');
expect(await checkBox.isChecked()).toBeFalsy();
await checkBox.check();
await expect(checkBox).toBeChecked();

//2nd Approach
await page.check('#tuesday');
expect(await page.locator('#tuesday').isChecked()).toBeTruthy();
await expect(page.locator('#tuesday')).toBeChecked();

await page.waitForTimeout(5000);

});