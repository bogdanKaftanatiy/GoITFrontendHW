function removeClass(object, classN) {
    var classString = object.className;
    if(classString == undefined)
        return;
    var arr = classString.split(' ');
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === classN) {
            arr.splice(i, 1);
            i--;
        }
    }
    classString = arr.join(' ');
    object.className = classString;
}

var obj = {
    className: 'open menu menu menu test'
};

console.log(obj);
removeClass(obj, 'menu');
console.log(obj);