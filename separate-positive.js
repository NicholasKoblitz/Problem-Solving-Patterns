// add whatever parameters you deem necessary
function separatePositive(arr) {

    let midIdx = Math.floor((arr.length - 1) /2);
    let left = midIdx;
    let right = midIdx + 1;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] < arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
   
    return arr;
}


