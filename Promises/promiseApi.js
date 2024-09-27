//4 Promise APIs which are majorly used:
// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()


//Promise.all()
//A promise is a placeholder for a value that's going to be available sometime later. The promise helps handle asynchronous operations. JavaScript provides a helper function Promise.all(promisesArrayOrIterable) to handle multiple promises at once, in parallel, and get the results in a single aggregate array.

// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     resolve("P1 Success");
//     }, 3000);
// });
// const p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     resolve("P2 Success");
//     }, 3000);
// });
// const p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     resolve("P3 Success");
//     }, 3000);
// });

// 📌 First Scenario --> All Promise resolved
Promise.all([p1,p2,p3]).then((result)=>{
    console.log(result); 
})
// Output: // ['P1 Success', 'P2 Success', 'P3 Success'] -> took 3 secs


//📌 Second Scenario --> One of the Promise fails
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P2 Fail');
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P3 Success');
//     }, 2000);
//   });


Promise.all([p1,p2,p3]).then((result)=>{
  console.log(result);
}).catch(err=>console.log(err));


//Promise.allSettled()
//Promise.allSettled() method that accepts a list of Promises and returns a new promise that resolves after all the input promises have settled, either resolved or rejected.

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P2 Success');
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P3 Success');
//     }, 2000);
//   });

Promise.allSettled([p1,p2,p3])
.then((result)=>console.log(result))
.catch((err)=>console.error(err));

//Promise.race()
//The Promise.race() static method accepts a list of promises as an iterable object and returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or reason from that promise. The name of Promise.race() implies that all the promises race against each other with a single winner, either resolved or rejected.

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P2 Success');
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P3 Success');
//     }, 2000);
// });

romise.race([p1, p2, p3])
  .then((results) => console.log(results))
  .catch(err => console.error(err));

 // It will return as soon as first promise is resolved or rejected.
 // In above example O/P: "P2 Success"

// 📌 Second Scenario  --> one Promise Fails

//  const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P2 Success');
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P3 Fails');
//     }, 2000);
// });

Promise.race([p1, p2, p3])
  .then((results) => console.log(results))
  .catch(err => console.error(err));

 //After 2 secs O/P: "P3 Fail"

//Promise.any()
//The Promise.any() method accepts a list of Promise objects as an iterable object. If one of the promises in the iterable object is fulfilled, the Promise.any() returns a single promise that resolves to a value which is the result of the fulfilled promise.

// 📌 First Scenario

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P2 Success');
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P3 Fails');
//     }, 2000);
// });

Promise.any([p1, p2, p3])
  .then((results) => console.log(results))
  .catch(err => console.error(err));

// It will wait for first settled **success**
// In above, p3 will settled first, but since it is rejected, so it will wait further so at 3rd second it will print "P1 Success"

// 📌 Second Scenario
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P2 Success');
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P3 Fails');
//     }, 2000);
// });

Promise.any([p1, p2, p3])
  .then((results) => console.log(results))
  .catch(err => console.error(err));

// After 5 secs: 'P2 Success'

//📌 Third Scenario
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('P1 Fail');
    }, 3000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('P2 Fail');
    }, 5000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('P3 Fail');
    }, 2000);
  });
  
  Promise.any([p1, p2, p3])
    .then((results) => console.log(results))
    .catch(err => {
      console.error(err);
      console.error(err.errors); // ['P1 Fail', 'P2 Fail', 'P3 Fail']
    });
  
  // Since all are rejected, so it will give "aggregate error" as output
  // AggregateError: All promises were rejected
  // To get AggregateError array you need to write "err.errors"

