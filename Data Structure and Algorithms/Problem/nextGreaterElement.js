function nextGreterElements(arr){
    const stack = [];
    const result = new Array(arr.length).fill(-1);

    for(let i=0; i<arr.length; i++){
        while(stack.length>0 && arr[stack[stack.length-1]]<arr[i]){
            result[stack.pop()] = arr[i];
        }
        stack.push(i);
    }
    return result;
}

console.log(nextGreterElements([4, 5, 2, 10]));