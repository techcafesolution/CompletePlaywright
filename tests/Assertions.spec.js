const{test, expect}=require('@playwright/test');
const exp = require('constants');


test('TypesOfAssertion',async ({page})=>{

//1. To have URL
await page.goto("https://testautomationpractice.blogspot.com/");

await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

//2. To have Title
await expect(page).toHaveTitle('Automation Testing Practice');

//3. To be Visible.
await expect(page.getByPlaceholder('Enter Name')).toBeVisible();

await page.getByPlaceholder('Enter Name').fill('Ranjita');

//4. To be Enable.
await expect(page.getByPlaceholder('Enter EMail')).toBeEnabled();

await page.getByPlaceholder('Enter EMail').fill('ranjita.p@gmail.com');

//5. To be Disable.
await expect(page.getByPlaceholder('Enter Phone')).not.toBeDisabled().then(await page.getByPlaceholder('Enter Phone').fill('854697515'));

//6. To Have Attribute
await expect(page.locator('#female')).toHaveAttribute('id');

await page.click('#female');

//7. To Be checked
await page.check("//input[@id='sunday']");
await expect(page.locator("//input[@id='sunday']")).toBeChecked();

//8. To have textContext
const options=await page.$$("//select[@id='country']//option");
for(const option of options){
    let text=await option.textContent();
    console.log(text);
    expect(text).toContain('United States');
    break;
};

//9. To have Value
await expect(page.locator('#name')).toHaveValue('Ranjita');
const name=page.locator('#name');
await name.clear();
await name.fill('Sanjeeb');
await expect(name).toHaveValue('Sanjeeb');

//10. To have count
await expect(page.locator("//div[@id='broken-links']//a")).toHaveCount(8);

});