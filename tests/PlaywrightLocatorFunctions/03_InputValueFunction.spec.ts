

import test, { expect } from "@playwright/test";

test("Getting textbox current value",async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/user-information.html")

   
   const cityName=await page.locator("#city").inputValue()

   console.log("city value is ",cityName)

   expect(cityName).toBe("Bangalore")


   await page.locator("#city").fill("chennai")

    const cityvalue=await page.locator("#city").inputValue()

    console.log("cityvalue is ", cityvalue)

   await page.waitForTimeout(5000)

})
