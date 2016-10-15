function pow(number, step) {
    if(step == 0)
        return 1;
    if(step < 0)
        return null;
    for(var i = 1; i < step; i++) {
        number = number * number;
    }
    return number;
}

console.log(pow(5, 3));