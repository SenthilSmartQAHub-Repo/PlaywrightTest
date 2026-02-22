import test, { expect } from "@playwright/test";

test("Get the text of the element",async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2025/11/quantity-update.html?from=success")

    await page.locator('text=Update Quantity').click();

    const textValue=await page.locator("#msg").textContent()

    console.log(textValue)

    expect(textValue).toBe("Your quantity has been updated to: 1")

    await page.waitForTimeout(5000)
})
