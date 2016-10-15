function unique(array) {
    var result = [];

    array.forEach(function (item) {
        if(result.indexOf(item) == -1) {
            result.push(item);
        }
    });

    return result;
}

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

console.log( unique(strings) );