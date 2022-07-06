// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let findAvg = (arr[left] + arr[right]) / 2;
        if(findAvg === avg) {
            return true;
        }
        else if(findAvg > avg) {
            right--
        }
        else {
            left++;
        }
    }
    return false;
    
}
