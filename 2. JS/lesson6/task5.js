function isPal(string) {
    string = string.toLowerCase();
    var wordArray = string.split(/[\s,]/);
    var charArray = [];
    for (var i = 0; i < wordArray.length; i++) {
        charArray = charArray.concat(wordArray[i].split(''));
    }
    // console.log(charArray);
    for (var i = 0; i < charArray.length/2; i++) {
        // console.log(charArray[i] + ' - ' + charArray[charArray.length - 1 - i]);
        if(charArray[i] != charArray[charArray.length - 1 - i])
            return false;
    }
    return true;
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
