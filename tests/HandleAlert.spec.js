const{test,expect}=require('@playwright/test');

test.skip('HandleNormalAlert',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

//1. handle normal alert
page.on('dialog', async dialog=>{
expect(dialog.type()).toContain('alert');
expect(dialog.message()).toContain('I am an alert box!');
await dialog.accept();
});
await page.click('#alertBtn');
await page.waitForTimeout(2000);

});

test.skip('HandleConformationAlert',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
//2. Handle conformation alert
page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    await dialog.accept();
});
await page.locator('#confirmBtn').click();
await expect(page.locator('#demo')).toHaveText('You pressed OK!');
await page.waitForTimeout(2000);

});

test('HandlePromptAlert',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

page.on('dialog', async dialog=>{
expect(dialog.type()).toContain('prompt');
expect(dialog.message()).toContain('Please enter your name:');
expect(dialog.defaultValue()).toContain('Harry Potter');
await dialog.dismiss('Sanjeeb');
});
await page.click('#promptBtn');
await expect(page.locator('#demo')).toHaveText('User cancelled the prompt.');
await page.waitForTimeout(2000);

});