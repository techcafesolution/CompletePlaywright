const{test,expect}=require('@playwright/test');

test('VerifyTitle',async ({page})=>{
    //1. Launch URL
    await page.goto("https://testautomationpractice.blogspot.com/");
    //2. Get Title
    const getTitle=await page.title();
    //3. Verify Title
    await expect(page).toHaveTitle(getTitle);
    //4. Print Title
    console.log("Title of the page is:: "+getTitle);
});