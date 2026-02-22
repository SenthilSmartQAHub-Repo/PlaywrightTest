import test, { expect } from "@playwright/test";

test("Handling Single-select listbox",async({page})=>{


    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/online-store.html")

  //  await page.locator("#payment").selectOption({index:2})

   //await page.locator("#payment").selectOption({value:"GPAY"})// value attribute

   await page.locator("#payment").selectOption({label:"Paytm"});// Name of option(textcontent)

    const selectedValue=await page.locator("#payment option:checked").textContent();

   
   console.log(selectedValue)
})