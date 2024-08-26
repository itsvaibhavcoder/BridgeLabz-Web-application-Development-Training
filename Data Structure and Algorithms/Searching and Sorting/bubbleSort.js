function bblSort(arr) {
    let n = arr.length;
    for (var i = 0; i <n; i++) { 
        for (var j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}
var arr = [234, 43, 55, 63, 5, 6, 235, 547];
console.log(bblSort(arr));


