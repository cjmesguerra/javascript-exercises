const fibonacci = function(num) {
    let n1 = 0
    let n2 = 1
    let nextTerm

    if (num <= 0) {
        num = "OOPS"
        return num
    } else {
        for (let i = 1; i <= num; i++) {
       
            nextTerm = n1 + n2
            n1 = n2
            n2 = nextTerm
        }
    }
    
    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
