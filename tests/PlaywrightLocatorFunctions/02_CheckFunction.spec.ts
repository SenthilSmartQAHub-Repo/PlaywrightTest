import test from "@playwright/test";

test("check function",async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/user-information.html")


    await page.locator("//input[@value='Female']").check();

    await page.locator("#agreeCheck").check()

    await page.waitForTimeout(5000)

   //   await page.locator("#agreeCheck").check()

    await page.locator("#agreeCheck").uncheck()

        await page.waitForTimeout(5000)
})
