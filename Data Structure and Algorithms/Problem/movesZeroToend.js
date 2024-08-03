// Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

// Examples
// zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

// zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]

// zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]

// zeroesToEnd([0, 0]) ➞ [0, 0]

function zeroesToEnd(items){
    let index = 0;
    for(let i=0; i<items.length; i++){
        if(items[i] !==0){
            items[index] = items[i];
            index++;
        }
    }
    while(index<items.length){
        items[index++] = 0;
    }
    
}

let items = [0,1,5,0,1,3]
zeroesToEnd(items);
console.log(items);




