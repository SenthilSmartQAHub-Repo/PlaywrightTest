

//Playwright Test method - is the core function of the playwright test runner
// Used to define and execute testscript to validate the application behavior

import test, { expect } from "@playwright/test";

//Syntax for test method

// test("Test Title or description",async({fixtures})=>{

//     // testscript
// })

//  fixtures--> page,browser,context

//page --> Isolated browser

test("open the Google Application",async({page})=>{

   await page.goto("http://www.google.com")

   const actualValue=await page.title()

   console.log(actualValue)

   const expected="Google"

   await expect(actualValue).toBe(expected)

   const applicationurl:string=page.url()

   console.log(applicationurl)



})
