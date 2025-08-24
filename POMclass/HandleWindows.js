const { expect } = require('@playwright/test');
const browserUtils = require('../Utils/BrowserUtils');
const { parseEnv } = require('util');

module.exports=class HandleWindows {

    constructor(page) {
        this.page = page;
        this.url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    }

    async getOrangeHRM() {
        await this.page.goto(this.url);
        await expect(this.page).toHaveTitle('OrangeHRM');
        await this.page.getByRole('link', { name: 'OrangeHRM, Inc' }).click();
        await this.page.waitForTimeout(2000);
        const newPage=await browserUtils.multiWindowHandle(this.page);
        await expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');
        await newPage.close();
        await expect(this.page).toHaveTitle('OrangeHRM');
        await this.page.waitForTimeout(2000);
        await this.page.close();
    }
}