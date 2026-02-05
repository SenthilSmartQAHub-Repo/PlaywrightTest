


import test from "@playwright/test";

test("Locate the element using Alt attribute",async({page})=>{

    await page.goto("https://playwright.dev/java/")

   //alt="VS Code"

   //alt="VS Code text"

   await page.getByAltText("VS Code",{exact:true}).click()


   await page.waitForTimeout(5000)

})

