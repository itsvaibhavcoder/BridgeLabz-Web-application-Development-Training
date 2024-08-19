//linear Search:
function linearSearch(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target) return true;
    }
    return false;
}

//console.log(linearSearch([1,5,10,4,2,8], 5)); //Output: True
//console.log(linearSearch([1,5,10,4,2,8], 9)); //Output: False

//Binary Search: 
function binarySearch(arr, key, left, right){
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
    
        if (arr[mid] === key) return mid;
        else if (arr[mid] > key) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}

let arr = [1,2,4,5,8,9];
console.log(binarySearch(arr,4, 0, arr.length-1));
// let arr2 = [1,2,4,5,8,9];
// console.log(binarySearch(arr2,10, 0, arr2.length-1));
