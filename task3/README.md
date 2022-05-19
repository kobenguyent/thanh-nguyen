# Introduction

This project demonstrates how to use CodeceptJS with REST helper. These test cases primarily focuses on crucial functionality of PET endpoints.

## How to use

This is done using CodeceptJS [https://codecept.io/](https://codecept.io/)

### Tech

This test uses a number of open source projects to work properly:

*[https://nodejs.org/en/](https://nodejs.org/en/) - evented I/O for the backend
*[https://codecept.io/](https://codecept.io/) - CodeceptJS
*[https://petstore3.swagger.io/](https://petstore3.swagger.io/) - Endpoints that are used in this project

### Installation

This requires [Node.js](https://nodejs.org/) v11+ to run.

Install the dependencies and devDependencies.

```sh
cd task3
npm i
```

### How to trigger API tests

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
