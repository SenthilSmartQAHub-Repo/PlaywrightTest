import test from "@playwright/test";

test("Locate the address multiline textbox and enter the values",async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/user-information.html")

    // await page.locator("#address").fill(`chennai 
    // Tamilnadu
    // 600069`)

     await page.locator("#address").fill("chennai\nTamilnadu\n600069")

   //  await page.locator("#city").fill("chennai")

      await page.locator("#city").clear()

    await page.waitForTimeout(5000)

    
})

