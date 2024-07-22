//A Promise is an object representing the eventual completion or failure of an asynchronous operation.

const fetchData =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully");
        }, 2000);
    });
};

fetchData()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.error(error);
})