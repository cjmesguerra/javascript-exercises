const sumAll = function(numStart, numEnd) {
    let sum = 0;

    if (typeof numEnd === "string"  || typeof numStart === "string" || numStart < 0 || numEnd < 0) {
        sum = 'ERROR';
    } else if (numStart < numEnd){
        for (let i = numStart; i <= numEnd; i++) {
            sum += i;
        }
    } else if (numStart > numEnd) {
        for (let i = numEnd; i <= numStart; i++) {
            sum += i;
        }
    } else if (typeof("string")) { //for array values
        sum = 'ERROR';
    }
        
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
