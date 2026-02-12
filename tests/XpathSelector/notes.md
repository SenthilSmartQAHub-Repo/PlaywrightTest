

Xpath(XML Path language) Selector
=================================
  
   1. Absolute Xpath
     
         starts from the root node(/html) and follows the complete DOM path to specific element

    /html/body/div[1]/div[2]/div/h1/a  - not recommanded bz if DOM Structure changes so this xpath will not work

   2. Relative Xpath

       starts with(//)

      1. xpath using Attribute
       ====================
         syntax:  //htmltagname[@attribute='value']
      2. xpath using Text
      ====================
         syntax: //htmltagname[text()='text content']

HTML code:
     <input type='text' placeholder='username'>
     <a ......>Gmail</a>

playwright code
    await page.locator("//input[@placeholder='username']")
    await page.locator("//a[text()='Gmail']")

Xpath Functions
===============

   1. text() - > text content
   2. contains()
   3. starts-with()
   4. normalize-space()
   5. last()
   6. position()

 Attribute with contains() --> checks partial attribute value

   //htmlcode[contains(@attribute,'value')]

  htmlcode: <input type='text' placeholder='Enter username'>

  playwright code: await page.locator("//input[contains(@placeholder,'username')]")
  ===================================================================================

 Text content with contains()--> checks partial text content

   //htmlcode[contains(text(),'text content')]

   <button> login </button>

   playwright code:  await page.locator("//button[contains(text(),'login')])


  3. starts-with()
      used for partial matcing at the beginning of attibute value

    syntax:  //htmltagname[starts-with(@attribute,'value')]

    Htmlcode:  <input type='text' id='user_123'>

    await page.locator("//input[starts-with(@id,'user')])

 4. normalize-space()
     remove the space before and after text content

     HTML code:  <button>       Log in     </Button>

     syntax: //htmltagname[normalize-space()='text content']

     await page.locator("//button[normalize-space()='Log in'])
     await page.locator("//button[normalize-space()='Log']) invalid
     await page.locator("//button[contains(text(),'log in')])
     await page.locator("//button[contains(text(),'log')]) - valid

  5. last()
       find the last element from list of matching elements
        
        (//htmltagname[@attribute='value'])[last()]
        (any of the xpath)

       html code:

       <input type='text' class='user'>
       <input type='text' class='user'>
       <input type='text' class='user'>-- found

await page.locator("(//input[@class='user'])[last()])
    
 6. position()
    
      Position starts from 1 (Not from 0)

 await page.locator("(//input[@class='user'])[position()=2])


Wildcards in xpath
==================

Any Element(*)
=============

 <input type='text' placeholder='username'>

//input[@placeholder='username']

//*[@placeholder='username']
//*[@placeholder='Enter Serial Number']

Any Attribute(@*)
===============

//*[@*='Enter Serial Number']


Xpath Axes:
===========


Parent node:

.. --> Immediate parent node

/.. or /parent::parenttagname

Child node:
/tagname  or /child::childtagname

(//*[text()='Register Modem']/../input)[1]


(//*[text()='Register Modem']/parent::div/child::input)[2]


Following-sibling
    selects all siblings after the current node
   
   //xpath by attribute or any function/following-sibling::tagname

//*[text()='Modem Serial Number']/following-sibling::input

Preceding-sibling
       selecrs all sibling before the current node
(//*[text()='Register Modem']/preceding-sibling::input)[1]


Ancestor Axis:

selects parent, grandparent etc

//*[text()='Register Modem']/ancestor::div/div[@class='form-box']/button


Descendant Axis

selects child, grandchild

//*[@id='modemRegister']/descendant::option




