//Callback Function: A function passed as an argument to another function, which is then executed inside the outer function.

function fetchData(callback){
    const data = [1,2,3];
    callback(data);
}

fetchData(data=>{
    console.log(data);
})
