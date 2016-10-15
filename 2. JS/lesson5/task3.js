var array = [];
var inputObject = prompt('Enter number: ');
while (inputObject != null && inputObject != '') {
    array.push(inputObject);
    inputObject = prompt('Enter number: ');
}

var sum = 0;
for(var i = 0; i < array.length; i++){
    if(!isNaN(array[i]))
        sum += +array[i];
}
alert('Sum: ' + sum);