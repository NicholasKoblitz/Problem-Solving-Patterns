// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let arrObj = {};

    if(arr1.length === arr2.length) {
        for(let i = 0; i < arr1.length; i++) {
            arrObj[arr1[i]] = arr2[i];
        }
    }
    else if(arr1.length > arr2.length) {
        for(let i = 0; i < arr1.length; i++) {
            if(i >= arr2.length) {
                arrObj[arr1[i]] = null;
            }
            else {
                arrObj[arr1[i]] = arr2[i];
            }

        }
    }
    else {
        for(let i = 0; i < arr2.length; i++) {
            if(i >= arr1.length) {
                return arrObj
            }
            else {
                arrObj[arr1[i]] = arr2[i];
            }
            
        }
    }
    return arrObj;
}
