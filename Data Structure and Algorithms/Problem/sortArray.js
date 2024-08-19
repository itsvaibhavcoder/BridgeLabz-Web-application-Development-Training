//WAP to sort array element in ascending or descending order.
//User 1 --> ascending
//User 0 --> descending

//Bubble sort
function ascendingSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

function descendingSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]<arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

function sort(arr, flag){
     if(flag===1){
        return ascendingSort(arr);
     }
     else {
        return descendingSort(arr);
     }
}

let arr = [5,1,3,4,2,6];
//console.log(sort(arr,1));
console.log(sort(arr,0));