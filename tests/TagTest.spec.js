const{test,expect}=require('@playwright/test');

test('test1@smoke',async ({page})=>{
    console.log("This is smoke test-1");
});

test('test2@smoke',async ({page})=>{
    console.log("This is smoke test-2");
});

test('test3@regression',async ({page})=>{
    console.log("This is regression test-3");
});

test('test4@regression',async ({page})=>{
    console.log("This is regression test-4");
});

test('test5@smoke@regression',async ({page})=>{
    console.log("This is soke and regression test-5");
});