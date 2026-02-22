import test, { expect } from "@playwright/test";

test("Handling Mulit-select listbox",async({page})=>{


    await page.goto("https://senthilsmartqahub.blogspot.com/2025/01/blog-post.html")

    await page.locator("#location").selectOption([{index:1},{value:'chicago'},{label:'Houston'}])

    const selectedValue=await page.locator("#location option:checked").allTextContents()

    console.log(selectedValue)


    await page.waitForTimeout(5000)
  
})