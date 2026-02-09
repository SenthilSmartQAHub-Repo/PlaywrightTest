
import test from "@playwright/test";

test("Locate the element using getByPlaceholder attribute",async({page})=>{

    await page.goto("https://www.amazon.com/")

   //placeholder="Search Amazon"
    await page.getByPlaceholder("Search Amazon").fill("Tshirt")


    await page.waitForTimeout(5000)

})
