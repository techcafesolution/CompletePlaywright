const{test, expect}=require('@playwright/test');

test.beforeAll('DB Open', async ()=>{
    console.log("DB Open...");

});

test.afterAll('DB Close', async ()=>{
    console.log("DB Close...");
});

test.beforeEach('Login', async ()=>{

    console.log("Logging in Application....");
});

test.afterEach('Logout', async ()=>{

    console.log("Logging out Application...");
});

test.describe('SmokeTests', async ()=>{
    console.log("Somke tests are running...");
    test('test1',async ({page})=>{
        console.log('Test-1 is running....');
    });
    
    test('test2',async ({page})=>{
        console.log('Test-2 is running....');
    });

});


test.describe('RegressionGroupe', async ()=>{
    console.log("Regression Tests are running...");
    test('test3',async ({page})=>{
        console.log('Test-3 is running....');
    });
    
    test('test4',async ({page})=>{
        console.log('Test-4 is running....');
    });

});
