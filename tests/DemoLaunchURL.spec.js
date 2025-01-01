
const{test,expect}=require('@playwright/test');
test('VerifyURL',async ({page})=>{
    //1. Launch URL
    await page.goto("https://testautomationpractice.blogspot.com/");
    //2. Get URL
    const pageURL=page.url();
    console.log("Page URL is:: "+pageURL);
    //3. Verify URL
    await expect(page).toHaveURL(pageURL);
});