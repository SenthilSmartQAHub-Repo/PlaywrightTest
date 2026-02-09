

import test from "@playwright/test";

test("Locate the element using  aria-label attribute",async({page})=>{

    await page.goto("https://playwright.dev/")

    // aria-label="GitHub repository"

    await page.getByLabel("GitHub repository").click()


    await page.waitForTimeout(5000)

})