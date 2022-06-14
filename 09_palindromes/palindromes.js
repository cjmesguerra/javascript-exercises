const palindromes = function (string) {

    let regExp = /[^A-Za-z0-9]/g

    let lowRegStr = string.toLowerCase().replace(regExp, '')

    let reverseStr = lowRegStr.split("").reverse().join("")

    return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
