import test, { expect } from "@playwright/test";

test("Get the Attribute value",async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2025/04/tooltip.html")

   
   const titleValue=await page.locator(".tooltip-link").getAttribute("title")

   console.log("tooltip message is ", titleValue)

   expect(titleValue).toBe("Click to learn about AI")


})
