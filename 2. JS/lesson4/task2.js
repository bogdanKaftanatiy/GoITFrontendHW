function checkSpam(string) {
    var spamArray = ['spam', 'sex'];
    var result = false;
    spamArray.forEach(function (object, i, array) {
        if(string.toLowerCase().indexOf(object) != -1) {
            result = true;
        }
    })
    return result;
}

console.log(checkSpam('get new Sex videos'));
console.log(checkSpam('[SPAM] How to earn fast money?'));
console.log(checkSpam('New PSD template'));