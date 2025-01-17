const{test,expect}=require('@playwright/test');
const { ADDRGETNETWORKPARAMS } = require('dns');

test('PaginationTable',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

//1. Table validation part
const table=page.locator("//table[@id='productTable']");
await expect(table).toBeVisible();
const row=page.locator("//table[@id='productTable']//tbody//tr");
expect(await row.count()).toBe(5);
console.log("Number of rows:: "+await row.count());
const column=page.locator("//table[@id='productTable']//tbody//tr[1]//td");
await expect(column).toHaveCount(4);
console.log("Number of Column:: "+await column.count());
//2. Table data searching part
const name=page.locator("//table[@id='productTable']//tbody//tr//td[2]");
const slide=page.locator("//ul[@id='pagination']//li");
const action=page.locator("//table[@id='productTable']//tbody//tr//td[4]//input");
for(let i=0; i<await slide.count(); i++){
    if(i>0){
        await slide.nth(i).click();
    }
    for(let n=0;n<await name.count();n++){
       const data=await name.nth(n).textContent();
       if(data.includes('Tablet')||data.includes('Television')||data.includes('Smart Home Hub')||data.includes('Wireless Mouse 20')){
         await action.nth(n).click();
         console.log("Checked==>"+data);
       }
    }
    await page.waitForTimeout(2000);
}
await selectTable(slide, action, name, 'E-Reader', page);
await page.waitForTimeout(3000);
});


async function selectTable(element1, element2, column, value){
    for(let i=0; i<await element1.count(); i++){
        if(i>0){
            await element1.nth(i).click();
        }
        for(let n=0;n<await column.count();n++){
           const data=await column.nth(n).textContent();
           if(data.includes(value)){
             await element2.nth(n).click();
             console.log("Checked==>"+data);
           }
        }
    }
}
