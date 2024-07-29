/*
What is async ?
What is await ?
How async await works behind the scenes ?
Example of using async/ await
Error handling
Interviews
Async await vs Promise.then/catch
*/

//Created the Promise
const promise = new Promise((resolve, reject)=>{
    resolve("Promise Resolved Values !");
})

// Async function Always return a promise
// async function getData(){
//  return "Namaste";
// }
async function getData(){
    return promise;
}

const dataPromise = getData();
//console.log(dataPromise);
//dataPromise.then(res=>console.log(res));

//Using async with await --> handle promises

//Before the async and await
// function getData(){
//     p.then(res => console.log(res));
// }
// getData();

//Using async and await
//Await is always used in inside async function

// async function handlePromise(){
//     const val = await p;
//     console.log(val);
// }
// handlePromise();

//Major difference between async-await and normal then
const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise1 resolved.");
    },10000)
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise2 resolved.");
    },5000)
});

//Using normal then method
//Here Namaste JavaScript will printed first in console then after promise value is printed.
function getData(){
    promise.then(res=>console.log(res));
    console.log("Namaste JavaScript");
}
getData();

//But in case of async-await behaviour is different execution actually wait for promise to solve

async function handlePromise(){
    console.log("Hello World !");
    const val1 = await p1;
    console.log("Namaste JavaScript");
    console.log(val1);
    
    const val2 = await p2;
    console.log("Namaste JavaScript");
    console.log(val2);
}
handlePromise();

// fetch (promise) function -- It gives promise
// fetch() --> return response--> response.json -->promise---> jsonVal
const API_URL = "https://api.github.com/users/itsvaibhavcoder";

//Fetch return the response body after we convert it into json object which is again promise
async function getUserData(){
    const data = await fetch(API_URL);
    const jsonVal = await data.json();
    console.log(jsonVal);

    // fetch().then(res=>res.json()).then(res=>console.log(res));
}

getUserData();

//Error handling using try and catch
async function getUserData(){
    try{
        const data = await fetch(API_URL);
        const jsonVal = await data.json();
        console.log(jsonVal);
    }
    catch(err){
      console.log(err);
    }
}
getUserData();
