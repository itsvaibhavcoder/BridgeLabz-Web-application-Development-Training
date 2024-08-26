function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let leftArray = new Array(n1);
    let rightArray = new Array(n2);

    for (let i = 0; i < n1; i++) {
        leftArray[i] = arr[left + i];
    }

    for (let j = 0; j < n2; j++) {
        rightArray[j] = arr[mid + 1 + j];
    }

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            arr[k++] = leftArray[i++];
        } 
        else {
            arr[k++] = rightArray[j++];
        }
    }

    while (i < n1) {
        arr[k++] = leftArray[i++];
    }

    while (j < n2) {
        arr[k++] = rightArray[j++];
    }
}
function mergeSort(arr, left, right) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2);

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
    return arr;
}

let arr = [6, 3, 1, 9, 0, 23, 4];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
