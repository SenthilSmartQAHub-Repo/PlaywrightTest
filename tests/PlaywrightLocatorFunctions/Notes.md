
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

8.  isVisible()

     used to check if the element is currently visible to the user then we will get output True else false

     -> visible -> true
     -> hidden - false

9. isHidden()
     used to check if the element is not visible to the user

    -> visible - false
    -> Hidden - true

10. isEnabled()
     
        used to check if element is enabled for interaction

        if element is enabled then it returns true else false

11. isDisabled()

       used to check if element is disabled(can't be interacted with)

       if element is disbaled then it returns true else false


Scenarios:
=========

   1) button shown but disabled ---> isvisible() -> true 
                                     isEnabled() -> false
   2) button hidden but enabled-->  isVisable() -> false
                                   isEnabled()-> true
   3) button hidden and disabled-->  isvisible()-false
                                     isEnabled()- false
   4) Button visible and enabled -> isvisible()- true
                                    isenabled()- true

12. isChecked()
      used to check whether checkbox or radio button is checked or unchecked

      - checked - true
      - unchecked - false
      
         supported elements:
            <input type='checkbox'>
            <input type='radio'>

13. textContent()  --> use when you need all text(both visible and hidden)
        used to get the text of the element
     innerText()  --> use when you need visible text
     innerHTML()  --> use when you need all text with html code.

     


   