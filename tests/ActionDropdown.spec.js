const{test,expect}=require('@playwright/test');

test('DropdownAction',async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//1. 1st approach
let locator=page.locator('#country');
await locator.selectOption('China');
await page.waitForTimeout(5000);
await page.locator('#country').selectOption('India');// Select by visible text
await page.locator('#country').selectOption({value:'brazil'});//Select by value
await page.locator('#country').selectOption({label:'Japan'});//Select by label
await page.locator('#country').selectOption({index:3});//Select by index
//2. 2nd approach
await page.selectOption('#country', 'India');

//3. Validate Dropdown
let options=page.locator('#country option');
await expect(options).toHaveCount(10);
let texts=await page.locator('#country').textContent();
expect(texts.valueOf('India')).toBeTruthy();
//4. Select dropdown by using enhanced for loop.
const elements=await page.$$("//select[@id='country']//option");
for(const element of elements){
    let options=await element.textContent();
    if(options.includes('France')){
        console.log(options);
        await page.selectOption('#country','France');
        break;
    }
}
await page.waitForTimeout(5000);
feature-1
Added a new line

 master
});