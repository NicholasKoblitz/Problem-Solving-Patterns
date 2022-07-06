/**creates an object of letter frequency */
function letterFreq(str) {
    const freq = {};
    for(let letter of str) {
        if(!freq[letter]) {
            freq[letter] = 1;
        }
        else {
            freq[letter] += 1;
        }
    }
    return freq;
}



// add whatever parameters you deem necessary
function constructNote(message, letters) {
    let mesFreq = letterFreq(message);
    let lettersFreq = letterFreq(letters);
    let combinedStr = `${message}${letters}`;
    let combinedFreq = letterFreq(combinedStr);
    let validationArr = []

    for(let key in combinedFreq) {

        if(lettersFreq[key] < mesFreq[key]) {
            return false;
        }
        else if(combinedFreq[key] > mesFreq[key]) {

            validationArr.push("y");
        }
   }

   if(validationArr.length === Object.keys(mesFreq).length) {
    return true;
   }
   else {
    return false
   }
}
