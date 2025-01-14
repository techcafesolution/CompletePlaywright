const{test,expect}=require('@playwright/test');

test('DemoMultiSelectDropDown',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

//1st away
await page.selectOption('#colors', ['Blue','Green','Yellow']);
//Assertions
let options=await page.$$('#colors option')
await expect((await options).length).toBe(7);
let colors=await page.locator('#colors').textContent();
await expect(colors.valueOf('Blue')).toBeTruthy();
expect(colors.includes('Pink')).toBeFalsy();
for(let option of options){
    let values=await option.textContent();
    console.log(values);
    if(values.includes('Red')){
        console.log('Yes it is present....');
        await option.click();
    }
}
await page.waitForTimeout(3000);
});