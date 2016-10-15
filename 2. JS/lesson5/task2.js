function multiplyNumeric(object) {
    console.log('multiplyNumeric');
    for(var key in object) {
        if(typeof object[key] == 'number') {
            object[key] *= 2;
        }
    }
}

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

console.log(image);
multiplyNumeric(image);
console.log(image);
