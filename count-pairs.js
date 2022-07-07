// add whatever parameters you deem necessary
function countPairs(arr, sum) {
    arr.sort((a,b) => a-b);
    let left = 0;
    let right = arr.length - 1;
    let count = 0;

    while(left < right) {
        let findSum = (arr[left] + arr[right]);
        if(findSum === sum) {
            count++
            left++
            right++
        }
        else if(findSum < sum) {
            left++;
        }
        else {
            right--;
        }
    }
    return count;
}