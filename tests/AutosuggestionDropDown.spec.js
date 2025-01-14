const{test,expect}=require('@playwright/test');

test('HandleAutosuggestions',async ({page})=>{
await page.goto('https://www.google.com/');

await page.locator("//textarea[@name='q']").fill("Java Script");
await page.waitForTimeout(1000);
let elements=await page.$$("//div[@id='Alh6id']//ul//li//div[@class='wM6W7d']//span");
for(let element of elements){
    const options=await element.textContent();
    if(options.includes('javascript')){
        console.log('Select option-->'+options);
        await element.click();
        break;
    }
}

await page.waitForTimeout(3000);

});