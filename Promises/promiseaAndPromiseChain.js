const cart = ["Shoes", "Pants", "Kurta"];

//Passing the callback function to another function
createOrder(cart,function(orderId){//It will return orderId
    proceedToPayment(orderId,function(paymentInfo){
        showOrderSummary(paymentInfo,function(){
                updateWalletBalance();
            });
    });
}); 

//Promise chaining
createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
   return updateWalletBalance(paymentInfo);
})

//Better way 
//Promise initially : Object {data : undefined} 
const promise = createOrder(cart);

//Attaching the callback to promise object
promise.then(function(orderId){
    proceedToPayment(orderId);
});




const GIT_HUB_API = "https://api.github.com/users/itsvaibhavcoder";

const user = fetch(GIT_HUB_API);
console.log(user);

user.then(function(data){
    return data.json(); // It will also return promise
})
.then(function(result){
    console.log(result);
})

//Async and await