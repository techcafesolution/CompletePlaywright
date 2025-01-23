const{test,expect}=require('@playwright/test');

test('Method-1',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'load'});

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Sanjeeb');
    })
    await page.click('#promptBtn');
    await page.waitForTimeout(2000);
})