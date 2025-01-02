const{test,aspect}=require('@playwright/test');

test('LocatorsTest',async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//1. How to fill value.
// 1st way by fill()
await page.locator('#name').fill("Sanjeeb");
//2nd way by type()--> Depricated no more use.
await page.locator('#email').type("sanjeebavana@gmail.com");
//3rd way without using locator method
await page.fill('#phone', "865974556");
//2. How to perform click operation.
//1st way of click() by using locator.
await page.locator("//input[@id='male']").click();
//2nd way of click() without using locator.
await page.click("//input[@id='female']");
//3. How to capture multiple web-elements
const locators=await page.$$("//select[@id='country']//option");
for(const locator of locators){
    let option=await locator.textContent();
    console.log(option);
 };
});