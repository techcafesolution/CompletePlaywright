const{test,expect}=require('@playwright/test');

test('UploadFile',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'load'});

    await page.locator('#singleFileInput').setInputFiles('D:/My Scan Document/AdharCard.pdf');
    await page.waitForTimeout(3000);
    await page.getByRole('button',{name:'Upload Single File'}).click();
    await expect(page.locator('#singleFileStatus')).toHaveText('Single file selected: AdharCard.pdf, Size: 423261 bytes, Type: application/pdf');
    await page.waitForTimeout(3000);

});

test.only('UploadMultipleFiles',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'load'});
    await page.locator('#multipleFilesInput').setInputFiles(['D:/My Scan Document/AdharCard.pdf',
                                                            'D:/My Scan Document/acknowledgementSlip.pdf']);
    await page.waitForTimeout(3000);
    await page.getByRole('button',{name:'Upload Multiple Files'}).click();
    await expect(page.locator('#multipleFilesStatus')).toContainText('AdharCard.pdf');
    await page.waitForTimeout(3000);

});