


import test, { expect } from "@playwright/test";

test("Count the listox options present in dropdown",async({page})=>{


    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/modem-registration.html")

   const totalValues=await page.locator(".isp-provider").locator("option").count()


   console.log(totalValues)
    
})

test("get the listox all options",async({page})=>{


    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/modem-registration.html")

   const alloptions=await page.locator(".isp-provider").locator("option").allTextContents()


   console.log(alloptions)
    
})


test("get the listox all options and sort the values",async({page})=>{


    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/modem-registration.html")

   const alloptions=await page.locator(".isp-provider").locator("option").allTextContents()

   console.log("Before sorting......",alloptions)

    alloptions.sort()

     console.log("after sorting - Acending......",alloptions)

  alloptions.reverse()

   console.log("reverse sorting -> decending......",alloptions)

})