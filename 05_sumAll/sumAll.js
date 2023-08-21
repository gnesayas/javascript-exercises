const sumAll = function(m, n) {
    if (typeof m !== 'number' || typeof n !== 'number' ||
        m < 0 || n < 0) {
        return 'ERROR';
    }
    const lo = m < n ? m : n;
    const hi = m > n ? m : n;
    let sum = 0;
    for (let i = lo; i <= hi; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
