const removeFromArray = function(array, ...items) {
    let values = [...items];
    array = array.filter(item=> !values.includes(item));
    return array;
};

/*removeFromArray([1, 2, 3, 4], 3, 2, 7, "tacos"); // tests 1-4
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4); // test 5
removeFromArray(["hey", 2, 3, "ho"], "hey", 3); // test 6
removeFromArray([1, 2, 3], "1", 3); // test 7
*/
// Do not edit below this line
module.exports = removeFromArray;
