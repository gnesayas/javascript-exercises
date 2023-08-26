const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        let oldestDeathYear = oldest.yearOfDeath ? oldest.yearOfDeath : (new Date()).getFullYear();
        let currentDeathYear = current.yearOfDeath ? current.yearOfDeath : (new Date()).getFullYear();
        if ((oldestDeathYear - oldest.yearOfBirth) > (currentDeathYear - current.yearOfBirth)) {
            return oldest;
        }
        return current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
