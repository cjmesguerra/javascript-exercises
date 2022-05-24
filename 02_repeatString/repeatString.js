const repeatString = function(string, num) {
    let text = string;
    let number = num;

    if (number === 'null' || number < 0) {
        let result = 'ERROR';
        return result;
    } else {
        let result = text.repeat(number);
        return result;
    }
  
};

/*repeatString('hey', 3); // test 1
repeatString('hey', 10); // test 2
repeatString('hey', 1); // test 3
repeatString('hey', 0); // test 4
repeatString('hey', -1); // test 5
*/
// Do not edit below this line
module.exports = repeatString;