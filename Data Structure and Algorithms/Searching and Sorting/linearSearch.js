function linearSearch(arr, key){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === key) return i;
    }
    return -1;
}
const mySearch = (arr, key)=>{
    for(let i=0; i<arr.length; i++){
        if(arr[i] === key) return i;
    }
    return -1;
}
const arr = [4,1,6,3,8,2,10]
let key = 8;
console.log(linearSearch(arr, key));
console.log(mySearch(arr, key));

