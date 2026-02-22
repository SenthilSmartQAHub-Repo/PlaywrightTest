import test, { expect } from "@playwright/test";

test("Get the text of the element from textcontent, innerText, innerHTML",async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/currentdatevalue.html")

  // const textValue=await page.locator("#demo1").textContent()

//    const textValue=await page.locator("#demo1").innerText()

     const textValue=await page.locator("#demo1").innerHTML()

    console.log(textValue)
   
    await page.waitForTimeout(5000)
})
