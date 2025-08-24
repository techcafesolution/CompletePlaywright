const{test,expect}=require('@playwright/test');
const HandleWindows = require('../POMclass/HandleWindows');


test('CheckFunction', async ({page})=>{

    const handlePage=new HandleWindows(page);
    await handlePage.getOrangeHRM();
});