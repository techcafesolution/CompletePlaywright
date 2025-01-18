const{test, expect}=require('@playwright/test');

test('DragAndDrop',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'load'});
    const sourceElement=page.locator('#draggable');
    const targetElement=page.locator('#droppable');
    //1st Approach.
    await sourceElement.hover();
    await page.mouse.down();

    await targetElement.hover();
    await page.mouse.up();

    await page.waitForTimeout(5000);

    //2nd Approach
    await page.reload({waitUntil:'load'});
    await sourceElement.dragTo(targetElement);
    await page.waitForTimeout(5000);


});