

CSS Selector  ===> Cascading Style Sheet
============ 

is an expression used to identify the elements on webpage based on their tagname, id, class, attributes or hierarchy

1. TagName + Attribute
  
  syntax: tagname[attribute='value']

HTML code: <input type='text' placeholder="Enter username">

playwright code: await page.locator('input[placeholder='Enter username']')

2. ID Attribute: 
when an element  has an id attribute, we can locate it using short css expression
  syntax: #IDValue

  HTMLCode : <input type='text' id="username">

  playwright code:  await page.locator('#username')

3. Class Attribute
when an element  has an class attribute, we can locate it using short css expression
   syntax: .classvalue

   HTMLcode: <input type='text' class='username'>

   playwright code: await page.locator(".username")

4. MulitpleAttributes

   syntax: tag[attribute='value'][attribute='value']

   HTMLCode : <input type='text' name='username' placeholder="Enter username">

   playwright code: await page.locator("input[name='username'][placeholder='Enter username']")

5. Partial Attribute Matching

  syntax: starts with :  tagname[attribute^='value']
          ends with :   tagname[attribute$='value']
          contains:  tagname[attribute*='value']

  HTML Code: <input type='text' id='user_name_123">

  Playwright code
     1.   await page.locator('input[id^='user'])
     2.   await page.locator('input[id$='123'])
     3.   await page.locator('input[id*='name'])

6. child and descendent selectors

Direct child

  syntax: parent > child

  > --> immediate child element 

  Html code:
     <div.........>
       <input type='text'>  -> identified
       <h1>
          <input>    -> not consider
     <div>
playwrigt code:

    await page.locator('div > input')


Any Descendant
   
    syntax:  parent anychild

 Html code:
     <div.........>
       <input type='text'>  -> identified
       <h1>
          <input>    -> not consider
     <div>

playwright code:

 await page.locator('div input')


7. Sibling Css Selector(+)
 
  syntax : element1 + element2

+ ==> immediate next sibling
  html code:
     <form>
        <h1>Username</h1>
        <input type='text'>
        <button type='text'>
        <a.....>
        <a.....>
     <form>
playwright code:

await page.locator('h1+input')

   General Sibling selector(~) => find all matched siblings
   ===========================

await page.locator('h1~a')

  


   