const{test}=require('@playwright/test');

test('CaptureNormalScreenshot',async ({page})=>{

    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'HomePage.png'});

});

test('CaptuFullpageScreenshot',async ({page})=>{

    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'FullPage.png',fullPage:true});
});

test.only('ElementScreenshot',async ({page})=>{
    await page.goto('https://demo.opencart.com/');
    await page.locator("(//div[@class='product-thumb'])[1]").screenshot({path:'tests/Screenshots/'+Date.now()+'MacBook.png'});
});