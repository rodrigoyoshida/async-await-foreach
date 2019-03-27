const asyncForEach = require('./index.js')
const myArray = [1, 2, 3]

function myPromise(item) {
  return new Promise(resolve => {
    console.log(item)
    resolve()
  });
}

asyncForEach(myArray, async item => {
  await myPromise(item)
}).then(() => {
  console.log('done')
})