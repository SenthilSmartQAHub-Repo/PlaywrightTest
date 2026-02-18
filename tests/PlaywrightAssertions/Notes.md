
Playwright Assertions:
=====================

    In playwright Assertions used to verify the expected and actual result are equal or not

    import {expect} from '@Playright/test'

    To validate the UI elements, API Responses, URLs , Title, and text

    if the assertion condition is not satified then the test failes

    Playwright provides two major types of assertions
    =================================================
      
      1. Auto Retrying Assertions(Web-First Assertions)

          1. Automatically waits
          2. Retires until condition becomes true
             5s --> Assertionstm
          3. Default timeout =5 Seconds(5000ms)
          4. used for locators, page and response

      2. Non-Auto Retrying Assertions(Generic Assertions)

            1. No Auto wait
            2. used for numbers , strings , arrays, objects values validation 
            3. Execute immediately


     Common Assertion Types:
     ======================
      
      Hard Assertion=>  if Assertion passes - > Test continues if Assertion failes-> remining steps will not be executed, and test output will be failed 
      Soft Assertion => if Assertion failes - Remining steps will be executed and test will be failed
      Nagative Assertion=> not modifier
