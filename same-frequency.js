/**creates an object of letter frequency */
function findFreq(item) {
    const freq = {};
    for(let i of String(item)) {
        if(!freq[i]) {
            freq[i] = 1;
        }
        else {
            freq[i] += 1;
        }
    }
    return freq;
}


// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let num1Freq = findFreq(num1);
    let num2Freq = findFreq(num2);
    let validationArr = []
    for(let i in num1Freq) {
        if(num1Freq[i] === num2Freq[i]) {
            validationArr.push('y')
        }
    }

    if(validationArr.length === Object.keys(num1Freq).length) {
        return true
    }
    else {
        return false;
    }

}
