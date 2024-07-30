//const URL = 'https://jsonplaceholder.typicode.com/todsos/1'

//It will show promise pending
// const data = fetch(URL);
// console.log(data);

//Getting data using then and catch
// fetch(URL)
// .then(respone => respone.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));

//Getting data by async and await
// async function FetchData(){
//  const respone = await fetch(URL);
//  const data = await respone.json();
//  console.log(data)
// }

// FetchData().catch(err=>console.log(err))

// //we can use try and catch to handle error
// async function FetchData(){
//   try{
//     const respone = await fetch(URL);
//     const data = await respone.json();
//     console.log(data)
//   }
//   catch(err){
//    console.log(err)
//   }
//  }
 
//  FetchData();



//Map, filter and reduce
const arr = [1,2,3,5,6];
 
//Map method
// We want each values in array should be double
const arr1 = arr.map(val => val*2);
//console.log(arr1);

//Fiter method 
//we want only even number from this array
const arr2 = arr.filter(val => val%2==0);
//console.log(arr2);

//Reduce method
const val = arr.reduce((acc, curr)=>{
     acc = acc+curr;
     return acc;
 }, 0)

 console.log(val)
 

//It will show promise in pending state
//console.log('Promise (initial):', promise);

// Now we will fetch the data from this promise in different ways

// 1. Using then and catch
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => {
//     console.log('Using then/catch:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

//2. Using async and await
// async function fetchData() {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await response.json();
//         console.log('Using async/await:', data);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }
    
// fetchData();

//3. Using a Callback Function
// function fetchDataWithCallback(callback) {
//       fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//           }
//           return response.json();
//         })
//         .then(data => callback(null, data))
//         .catch(error => callback(error, null));
//     }
    
//     function handleData(error, data) {
//       if (error) {
//         console.error('Error:', error);
//       } else {
//         console.log('Data received:', data);
//       }
//     }
    
//     // Call the function and pass in the callback
//     fetchDataWithCallback(handleData);
    
    