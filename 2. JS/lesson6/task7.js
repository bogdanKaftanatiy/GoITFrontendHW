function anClean(array) {
    function equalsAnagram(string, anotherString) {
        string = string.toLowerCase();
        anotherString = anotherString.toLowerCase();
        var firstArray = string.split('');
        var secondArray = anotherString.split('');

        if(firstArray.length != secondArray.length)
            return false;

        for (var i = 0; i < firstArray.length; i++) {
            if(secondArray.indexOf(firstArray[i]) == -1)
                return false;
        }

        return true;
    }

    var result = [];
    for (var i = 0; i < array.length - 1; i++) {
        var flag = false;
        for (var j = i + 1; j < array.length; j++) {
            if(i == j)
                continue;
            if(equalsAnagram(array[i], array[j]))
                flag = true;
        }
        if(!flag)
            result.push(array[i]);
    }
    result.push(array[array.length -1 ]);
    return result;
}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log( anClean(arr) );