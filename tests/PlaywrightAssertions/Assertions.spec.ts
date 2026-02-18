import test, { expect } from "@playwright/test";

test("Validating the google page title",async({page})=>{

    await page.goto("http://www.google.com")

  //  await expect(page).toHaveTitle("Google") //Auto Retrying Assertions

     const titleofpage=await page.title()

     expect(titleofpage).toBe("Google") // Non-Auto Retrying Assertions

})

test("Validating the disabled button",async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/customer-management-portal.html")

   // const SaveCustomerButton=page.locator("#custSaveBtn")
  //  await expect(SaveCustomerButton).toBeDisabled()// Auto Retrying Assertions


    const SaveCustomerButton=await page.locator("#custSaveBtn").isDisabled()
    expect(SaveCustomerButton).toBeTruthy()  // Non-Auto Retrying Assertions
})

test("Hard Assertions and Soft Assertions",async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/customer-management-portal.html")

   // const SaveCustomerButton=page.locator("#custSaveBtn")
  //  await expect(SaveCustomerButton).toBeDisabled()// Auto Retrying Assertions


  //Hard Assertions
    // const SaveCustomerButton=await page.locator("#custSaveBtn").isEnabled()
    // expect(SaveCustomerButton).toBeTruthy()  // Non-Auto Retrying Assertions
    // await page.locator("#custName").fill("Test")

 //Soft Assertions
    //   const SaveCustomerButton=await page.locator("#custSaveBtn").isEnabled()
    //  expect.soft(SaveCustomerButton).toBeTruthy()  // Non-Auto Retrying Assertions
    //  await page.locator("#custName").fill("Test")
    //  await page.waitForTimeout(5000)


    // Nagative Assertions
     const SaveCustomerButton=await page.locator("#custSaveBtn").isEnabled()
     expect.soft(SaveCustomerButton).not.toBeTruthy()  // Non-Auto Retrying Assertions
      await page.locator("#custName").fill("Test")
     await page.waitForTimeout(5000)
})