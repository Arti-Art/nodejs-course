// Async & Promises

const { finished } = require("stream")

setTimeout(() => {
  console.log('I\'m second!')
}, 1000)

console.log('I\'m first!')


// Passing callbacks
const fetchData = (callback) => {
  setTimeout(() => {
    callback('Now it\'s really finished.') // this is passed as an argument to the callback we provide
  }, 1500)
}

setTimeout(() => {
  console.log('First Timeout Finished')
  fetchData(text => {
    console.log(text)
  }); // this is the function we pass to fetchData
}, 2000)

// This looks super confusing, but makes sense if you think about it a bit.

// Promises
const fetchData2 = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!')
    }, 1500)
  })
  return promise;
}

setTimeout(() => {
  console.log('First Timeout Finished')
  fetchData2()
  .then(text => {
    console.log(text);
    return fetchData2();
  })
  .then(text2 => {
    console.log(text2);
  });
}, 3000)