const {test, expect}=require('@playwright/test');

test('SampleBootstrap', async ({page})=>{

await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

await page.locator("//button[@type='button']").click();

//1. Verify Assertion
let options=await page.$$("//button[@type='button']//following-sibling::ul//li");
console.log(options.length);
await expect(options.length).toBe(14);

//2. Select multiple value
for(let option of options){
    let values=await option.textContent();
    if(values.includes('Java')||values.includes('Python')||values.includes('MySQL')){
        await option.click();
        console.log("Checked on -->"+values);
    }
}

//3. Deselect Multiple value
await page.waitForTimeout(3000);

for(let option of options){
    let values=await option.textContent();
    if(values.includes('HTML')||values.includes('CSS')){
        //expect(await option.isChecked()).toBeTruthy();
        await option.click();
        console.log("Unchecked-->"+values);
    }
}
await page.waitForTimeout(3000);

});