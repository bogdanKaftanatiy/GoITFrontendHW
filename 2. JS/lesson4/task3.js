function truncate(string) {
    if(string.length > 20) {
        string = string.substr(0, 20) + '...';
    }
    return string;
}

console.log(truncate("some test very long string for my best function TRUNCATE"));