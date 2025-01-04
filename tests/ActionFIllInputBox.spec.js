const{test,expect}=require('@playwright/test');

test('DemoFillTextBox',async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const nameInput= page.locator('#name');
await expect.soft(nameInput).toBeEnabled();
await nameInput.fill('Ranjita');

const emailInptBox=page.locator('#email');
await expect.soft(emailInptBox).toBeEmpty();
await emailInptBox.fill('sanjeeb.d@example.com');

const phoneInptBox=page.locator('#phone');
await expect.soft(phoneInptBox).toBeVisible();
await phoneInptBox.fill('865894516');

const addressInpt=page.locator('#textarea');
await expect(addressInpt).not.toBeDisabled();
await addressInpt.fill('At/Po/Via:: Avana');

});