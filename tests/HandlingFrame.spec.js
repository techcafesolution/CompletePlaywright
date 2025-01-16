const{test,expect}=require('@playwright/test');

test('DemoFrame',async ({page})=>{

await page.goto('https://ui.vision/demo/webtest/frames/');

//How to count no of frames.
const allFrame= page.frames();
console.log("Number of frames are present:: "+allFrame.length);

//1st approach --> By using frame locator
let text1=page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']");
await text1.fill('Java Course');
//2nd approach--> by using frame object
const frame2= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'});
await frame2.fill("//input[@name='mytext2']",'Oracle');

const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
await frame3.fill("//input[@name='mytext3']",'Playwright');

//Access inner frame
const innerFrame=frame3.childFrames();
console.log("Child Frame size:: "+innerFrame.length);
await innerFrame[0].locator("//div[@id='i6']//div[3]/div").click();
//await innerFrame[0].locator("//div[@id='i12']//div[3]/div").check();

const frame4=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_4.html'});
await frame4.fill("//input[@name='mytext4']","JavaScript");

const frame5=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_5.html'});
await frame5.fill("//input[@name='mytext5']","Selenium");
await page.waitForTimeout(3000);

});