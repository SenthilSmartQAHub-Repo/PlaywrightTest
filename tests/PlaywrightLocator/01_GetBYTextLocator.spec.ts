import test from "@playwright/test";

test("Locate the element using getbyText()",async({page})=>{

    await page.goto("http://www.google.com")
   
 //   <a ......>Gmail</a>
    const gmailLink=page.getByText("Gma")

    await gmailLink.click()

    await page.waitForTimeout(5000)
})

test("locate the API link", async({page})=>{

    await page.goto("https://playwright.dev/java/")

    await page.getByText("API",{exact:true}).click()

     await page.waitForTimeout(5000)
})