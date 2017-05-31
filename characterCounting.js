function countLetters(str) {
    var output = { };
    splitStr = str.split(' ').join('').toLowerCase().split('')

    for (var i = 0; i < splitStr.length; i++) {
        var currChar = splitStr[i];
        if (output[currChar] === undefined) {
            output[currChar] = 1
        } else {
            output[currChar] += 1
        }

/* If it is a character we haven't seen before make character the key
and have the value = 1
if we have seen the character is already a key then add 1 */


        // if (i === undefined) {
        //     return i = 1
        // } 
    }
        return output;
}

console.log(countLetters('lighthouse in the house'));