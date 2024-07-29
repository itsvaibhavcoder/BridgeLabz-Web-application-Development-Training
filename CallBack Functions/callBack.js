//Callback functions are used to perform asynchronous operations in JavaScript

console.log("Namaste");

// It will print after 5 sec
setTimeout(function(){
    console.log("JavaScript");
},5000)

console.log("Season 2");

//E-commerce website example
// 1) We creates the order with cart items
// 2) Then we proceeds to payment 
// 3) Show the order summary
// 4) Update the wallet
const cart = ["Shoes", "pants", "Kurta"];

//callBack hell : One callback inside another callback and so on.. It makes code expand horizontally wrather than vertically.

//Pyramid of Doom :
api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet()
        });
    });
});

//Inversion of control: We lose the control over our code and trust that our function we will be called by other function.





