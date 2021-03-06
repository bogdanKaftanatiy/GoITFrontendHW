function Calculator() {
    var operations = {
        '+' : function (a, b) {
            return a + b;
        },
        '-' : function (a, b) {
            return a - b;
        }
    };

    this.calculate = function (str) {
        var arr = str.split(' ');

        var a = +arr[0];
        var b = +arr[2];
        var operation = arr[1];
        return operations[operation](a, b);
    };

    this.addMethod = function (name, func) {
        operations[name] = func;
    };
}

var calc = new Calculator;
console.log( calc.calculate('3 + 7') );

var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
    return a * b;
});
powerCalc.addMethod('/', function(a, b) {
    return a / b;
});
powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log( result ); // 8