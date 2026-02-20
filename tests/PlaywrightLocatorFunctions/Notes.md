
Playwright Locator Functions
============================
  
  Used to perform operation on the webelements

  1. click() -  Click on an element(button, link,checkbox, radiobutton, menu items, image)
              - Automatically waits for the element to be visible and enabled.

  2. fill() - used to enter the text into input fields or multiline <textarea> elements
            - can handle mulitple text using template literals(``) or \n(new line)
            - Automatically waits for the element to be visible and editable
            - overide the existing value present in the textbox or multiline textbox

       Note: locator.type()-- Deprecated and will not overide the exsting value.it appends text

  3. clear() - Used to clear the existing value present in the textbox and multiline textbox
             

  4. Check()  -  used to check the checkbox or radiobutton

        supported elements:
            <input type='checkbox'>
            <input type='radio'>
 5.  uncheck()  - used to uncheck the checkbox
     supported elements:  
         <input type='checkbox'>

 6. inputValue()

      used to get the current value from the textbox or multiline textbox

      note: Set a value -  use fill()
            read a value - use inputValue()

 7. getAttribute()
    
     used to get the value of the specific attribute from the element
      
      - href
      - src
      - value
      - type
      - placeholder
      - id
      - class
      - disabled

      syntax: getAttribute(attributeName)  it will return the respective attribute value

   <tagname attributename='attributevalue' attributename='attributevalue' attributename='attributevalue' >

