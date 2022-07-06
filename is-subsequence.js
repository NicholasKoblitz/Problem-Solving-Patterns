// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let idx = 0;
    let validationArr = [];
    while(idx < str1.length) {
        for(let i = 0; i < str2.length; i++) {
            if(str1[idx] === str2[i] ) {
                validationArr.push('y');
                idx++;
            }
        }
        idx++;
    }
    if(validationArr.length === str1.length) {
        return true;
    }
    else { 
        return false;
    }
}
