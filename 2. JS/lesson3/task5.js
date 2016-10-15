var result = '';
var size = 15;
var flag = true;
for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        if(flag) {
            result += '\#';
        } else {
            result += ' ';
        }
        flag = ! flag;
    }
    result += '\n';
    if(size % 2 == 0) {
        flag = !flag;
    }
}

console.log(result);