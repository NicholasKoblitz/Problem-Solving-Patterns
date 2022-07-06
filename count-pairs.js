// add whatever parameters you deem necessary
function countPairs(arr, sum) {
    let count = 0;
    let left = 0;
    let right = arr.length -1;

    while(right !== -1) {
        for(let i = 0; i < arr.length; i++) {
            console.log("sum:", arr[left] + arr[i], "left:", left, "i:", i)

            if(right === 0) {
                right--;
            }
            else if(arr[right] + arr[i] === sum) {
                count++
                right--
            }
            else {
                right--
            }
        }
    }
        return count;
}

    // let left = 0;
    // let right = arr.length - 1;
    // let count = 0;

    // while(left < right) {
    //     let findSum = (arr[left] + arr[right]);
    //     console.log(findSum)
    //     if(findSum === sum) {
    //         console.log(count, findSum, sum)
    //         count++
    //         left++
    //     }
    //     else if(findSum < sum) {
    //         left++;
    //     }
    //     else {
    //         right--;
    //     }
    // }

    // left = 0
    // right = arr.length - 1;
    // while(right > left) {
    //     let findSum = (arr[left] + arr[right]);
    //     console.log(findSum)
    //     if(findSum === sum) {
    //         console.log(count, findSum, sum)
    //         count++
    //         right--
    //     }
    //     else {
    //         right--;
    //     }
    // }
    // console.log(count)
    // return count;

    // left = 0
    // right = 1;
    // for(let i = 0; i < arr.length; i++) {
    //     let findSum = (arr[left] + arr[right]);
    //     console.log(count, findSum)
    //     if(findSum === sum) {
    //         count++
    //         right++
    //         left++;
    //     }
    //     else {
    //         left++;
    //         right++;
    //     }
    // }

// }