# Async Await forEach

`async-await-foreach` provides an `asyncForEach()` function that:

- Allows promises to be `await`ed inside the loop. 
- Is also asynchronous so it returns a promise, - use `await` or `then()`

## Install

You can install this module using your favorite module manager (Yarn or NPM)

``` shell
yarn add async-await-foreach
```

``` shell
npm install async-await-foreach
```

## Import

You can import it as a RequireJS module and ES6 module, as following: 

``` javascript
const asyncForEach = require('async-await-foreach') 
```

``` javascript
import asyncForEach from 'async-await-foreach'
```

## Usage

Using `await` inside another async function:

``` javascript
let myArray = [1, 2, 3]

await asyncForEach(myArray, async item => {
  await myPromise(item)
})

console.log('done')
```

Using 'then':

``` javascript
let myArray = [1, 2, 3]

asyncForEach(myArray, async item => {
  await myPromise(item)
}).then(() => {
  console.log('done')
})
```

