const cart = ["Shoes", "pants", "kurta"];

//Consumer part of promise
const promise = createOrder(cart); // orderId

//Producer part of promise
function createOrder(cart){
    const promise = new Promise((resolve, reject)=>{
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err);
        }
        const orderId = "12345";
        if(orderId){
            resolve(orderId)
        }
    });
    return promise;
}

const valid = function validateCart(cart){
    return true;
}