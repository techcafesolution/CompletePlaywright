module.exports=class BrowserUtils{

    static async multiWindowHandle(page){
       const [newPage]=await Promise.all([
            page.waitForEvent('popup',{timeout:5000})
       ]);

       await newPage.waitForLoadState('domcontentloaded');
       return newPage;
    }
}