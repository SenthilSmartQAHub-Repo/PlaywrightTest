

import test from "@playwright/test";

test("Locate the element using  Label for='id' referenced input id",async({page})=>{


    await page.goto("https://www.wikipedia.org/")

    await page.getByLabel("Search Wikipedia").fill("Playwright")
 
    await page.waitForTimeout(5000)

})