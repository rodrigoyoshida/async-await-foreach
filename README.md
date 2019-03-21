# Async Await forEach

This is a simple module that provides an asyncForEach function that allows promises to be awaited inside the loop. The asyncForEach function is also asynchronous so it needs to be treated as a promise (use then or await).

## Import

You can import it as a RequireJS module and ES6 module, as following: 

``` javascript
const asyncForEach = require('async-await-foreach') 
```

``` javascript
import asyncForEach from 'async-await-foreach'
```

## Usage

Using 'then' to execute code after finishing the forEach loop

``` javascript
let myArray = [1, 2, 3]

asyncForEach(myArray, async item => {
  await myPromise(item)
}).then(() => {
  console.log('done')
})
```

Using inside another async function

``` javascript
let myArray = [1, 2, 3]

await asyncForEach(myArray, async item => {
  await myPromise(item)
})

console.log('done')
```