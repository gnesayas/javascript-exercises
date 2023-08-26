const fibonacci = function(num) {
    if (parseInt(num) < 0) return "OOPS";
    let current = 1;
    let next = 1;
    let i = 1;
    while (i < num) {
        let temp = current;
        current = next;
        next += temp;
        i++;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
