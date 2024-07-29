// Create a new Promise
let myPromise = new Promise(function(resolve, reject) {
    // Simulate an asynchronous operation (e.g., a network request, a timeout, etc.)
    setTimeout(function() {
        let success = true; // This is just a simulation; in real use, this would be the result of the async operation

        if (success) {
            resolve("Operation was successful!"); // Call resolve if the operation was successful
        } else {
            reject("Operation failed."); // Call reject if the operation failed
        }
    }, 2000); // Simulate a 2-second delay
});

// Use the Promise
myPromise.then(function(result) {
    console.log(result); // This will run if the Promise is resolved
}).catch(function(error) {
    console.log(error); // This will run if the Promise is rejected
});
