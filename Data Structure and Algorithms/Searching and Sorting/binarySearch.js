//For sorted array
function binarySearch(arr, key, left, right) {
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        
        if (arr[mid] === key) return mid;
        else if (arr[mid] > key) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}

const arr = [1,2,4,6,7,8,9];
console.log(binarySearch(arr,10, 0, arr.length-1));
