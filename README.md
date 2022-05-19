# Task 1 - Exploratory Test cases

- Could be found in tasks1/MonefyTestSuite.md

## Results

- Everything works as expected after doing the exploratory testings.
- Found some improvements:

```
1. After 999999999 * 999999999 -> displays as 0, perhaps we could have some nicely note to customers
2. Limit the characters when inputting comments
```

- Expense/Income/Transfer are one of the areas that we need to explore first due to they are the crucial functions of app.

# Task 2 - Automation tests for Monefy app using CodeceptJS - Appium Helper

## Introduction

This covers some basic cases like:

- Installing/Uninstalling app
- Adding new Income
- Adding new Expense
- Verifying that balance is correct with Income and Expense

## How to use

This automated test is done using CodeceptJS https://codecept.io/

#### Tech

Using a number of open source projects to work properly:

* https://nodejs.org/en/ - evented I/O for the backend
* https://codecept.io/ - CodeceptJS
* Java SDK
* App inspector - https://macacajs.github.io/app-inspector/

Android:

- You need to set those following env vars in your terminal profile - on Apple Macbook M1:

```
export ANDROID_SDK_ROOT=/Users/$(whoami)/Library/Android/sdk
export JAVA_HOME=/opt/homebrew/Cellar/openjdk/18.0.1/libexec/openjdk.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

- You need to install the Android Emulators -> https://developer.android.com/studio/run/emulator

#### Installation

- This automation test suite requires [Node.js](https://nodejs.org/) v12+ to run.
- Install the dependencies and devDependencies.

```sh
$ cd task2
$ npm i
```

#### How to trigger the tests

You need to start the appium server first:

```sh
$ npx appium
```

Run android tests:

```sh
$ npx codeceptjs run --verbose --grep @android
```

![A Running Test](http://g.recordit.co/ggxM6OFMJP.gif)

What are you seeing on the console log when running with verbose mode:

```shell
Helpers: Appium
Plugins: screenshotOnFail

Balance @android --
    [1]  Starting recording promises
    Timeouts: 
  Balance updates correctly with income and expense
    androidHomeScreen: addNewIncome "50"
      I wait 2
      I tap "#com.monefy.app.pro:id/income_button"
      I wait 2
      I tap "#com.monefy.app.pro:id/buttonKeyboard5"
      I wait 2
      I tap "#com.monefy.app.pro:id/buttonKeyboard0"
      I wait 2
      I tap "#com.monefy.app.pro:id/keyboard_action_button"
      I wait 2
      I tap "#com.monefy.app.pro:id/imageView"
    androidHomeScreen: addNewExpense "30"
      I wait 2
      I tap "#com.monefy.app.pro:id/expense_button"
      I wait 2
      I tap "#com.monefy.app.pro:id/buttonKeyboard3"
      I wait 2
      I tap "#com.monefy.app.pro:id/buttonKeyboard0"
      I wait 2
      I tap "#com.monefy.app.pro:id/keyboard_action_button"
      I wait 2
      I tap "#com.monefy.app.pro:id/imageView"
    I: waitAndSeeText "20"
      I wait 2
      I see "20"
  ✔ OK in 29999ms


  OK  | 1 passed   // 35s

```

Run a specific test for debugging:

```sh
# adding .only to the scenario you wanna to run
Scenario.only('Balance updates correctly with income and expense', async () => {
    await androidHomeScreen.addNewIncome(income);
    await androidHomeScreen.addNewExpense(expense);
    I.waitAndSeeText('20');
});

#then executing the tests normally, it will trigger only the test you added the .only
$ npx codeceptjs run --verbose --grep @android
```

#### Troubleshooting

- If you encounter the following issue when executing tests -> run `npm run fix-error`

```shell
> export PLATFORM=android && codeceptjs run --verbose --grep @android

creating output directory: /Users/thanh/Desktop/thanh-nguyen/task2/output
/Users/thanh/Desktop/thanh-nguyen/task2/node_modules/@cucumber/tag-expressions/test/tag_expression_parser_test.ts:1
import assert from 'assert'
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at compileFunction (<anonymous>)

```

- If you encounter the following issue, you perhaps are not starting the appium server -> run `appium`

```
Please make sure Selenium Server (ChromeDriver or PhantomJS) is running and accessible
Error: Can't connect to WebDriver.
Error: Failed to create session.
Unable to connect to "http://0.0.0.0:4723/wd/hub", make sure browser driver is running on that address.
If you use services like chromedriver see initialiseServices logs above or in wdio.log file as the service might had problems to start the driver.

Please make sure Selenium Server (ChromeDriver or PhantomJS) is running and accessible

```

# Task 3 - API Automation Tests

## Introduction

This project demonstrates how to use CodeceptJS with REST helper. These test cases primarily focuses on crucial functionality of PET endpoints.

### How to use

This is done using CodeceptJS [https://codecept.io/](https://codecept.io/)

#### Tech

This test uses a number of open source projects to work properly:

*[https://nodejs.org/en/](https://nodejs.org/en/) - evented I/O for the backend
*[https://codecept.io/](https://codecept.io/) - CodeceptJS
*[https://petstore3.swagger.io/](https://petstore3.swagger.io/) - Endpoints that are used in this project

#### Installation

This requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies.

```sh
cd task3
npm i
```

#### How to trigger API tests

To run all api tests just simply type

```sh
npm test
```

Example output

```sh
Pet - Create a new pet in the store --
  ✔ Verify creating new pet successfully in 535ms
  ✔ Verify Invalid input in 607ms
Pet - Delete an existing pet --
  ✔ Verify deleting pet successfully in 804ms
  ✔ Verify Invalid ID supplied in 350ms
  ✔ Verify non existing ID supplied in 493ms
Pet - Find pets --
  ✔ Verify finding pets by status - available in 728ms
  ✔ Verify finding pets by status - pending in 723ms
  ✔ Verify finding pets by status - sold in 720ms
  ✔ Verify finding pets by status - bogus status in 716ms
  ✔ Verify finding pets by tags in 722ms
  ✔ Verify finding pets by multiple tags in 719ms
  ✔ Verify finding pets by non existing tags in 459ms
  ✔ Verify finding pets by valid id in 676ms
  ✔ Verify finding pets by invalid id in 344ms
  ✔ Verify finding pets by non existing id in 339ms
Pet - Update an existing pet --
  ✔ Verify updating pet successfully in 680ms
  ✔ Verify Invalid ID supplied in 341ms
  ✔ Verify Pet not found in 343ms
  ✔ Verify updating pet with form data in 685ms
  ✔ Verify updating pet with form data - invalid query string in 677ms

  OK  | 20 passed   // 12s
```

To debug a test, just adding .only to the desired scenario, then run

```sh
npx codeceptjs run --verbose
```

Example output

```sh
Helpers: REST, JSONResponse
Plugins: screenshotOnFail, allure

Pet - Delete an existing pet --
    [1]  Starting recording promises
    Timeouts: 
  Verify non existing ID supplied
    I send delete request "/pet/4675678797798777978"
    › [Request] {"baseURL":"https://petstore3.swagger.io/api/v3/pet/4675678797798777978","method":"DELETE","headers":{}}
    › [Response] "Pet deleted"
    I see response code is successful 
  ✔ OK in 537ms


  OK  | 1 passed   // 551ms

```
