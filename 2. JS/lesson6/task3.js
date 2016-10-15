var arr = [1, 2, 3, 4, 5];

arr.sort(function (a, b) {
    return Math.random()*3 - 2;
});

console.log( arr );