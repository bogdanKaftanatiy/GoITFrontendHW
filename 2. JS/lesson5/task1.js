function getMaxCompletedTask(object) {
    var max = -Infinity;
    for (var key in object) {
        if(object[key] > max)
            max = object[key];
    }
    return max;
}

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

console.log(getMaxCompletedTask(tasksCompleted));