const leapYears = function(year) {
    
    if (year % 4 != 0)  {
        return false;
    } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) { //1600 & 700
        return true;
    } else if (year % 4 === 0 && year % 100 === 0) { // 1900
        return false;
    } else if (year % 4 === 0) {
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
