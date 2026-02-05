

import test from "@playwright/test";

test("Locate the element using title attribute",async({page})=>{

    await page.goto("https://www.google.com")

    //title="Curling 2026"
    await page.getByTitle("Curling 2026").click()


    await page.waitForTimeout(5000)

})

test("Locate search textbox using title",async({page})=>{

    await page.goto("https://www.mail.com")

   //title="Enter searchterm here"
    await page.getByTitle("Enter searchterm here").fill("testing")

    await page.waitForTimeout(5000)


})

