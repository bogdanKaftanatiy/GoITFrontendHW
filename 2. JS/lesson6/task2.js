function sortArray(array) {
    var result = array.slice();
    result.sort();
    return result
}

var arr = ['HTML', 'JavaScript', 'CSS'];
var arrSorted = sortArray(arr);

console.log('Arr: ' + arr);
console.log('ArrSorted: ' + arrSorted);