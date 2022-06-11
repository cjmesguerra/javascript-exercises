const add = function(num1, num2) {
	let sum = num1 + num2
  return sum
};

const subtract = function(num1, num2) {
	let diff = num1 - num2
  return diff
};

const sum = function(...numbers) {
	let addends = numbers.reduce((prev, curr) => prev + curr);

  let sum = addends.reduce(getSum, 0)

  function getSum(total, num) {
    return total + num;
  }
 
  return sum
}

const multiply = function(...numbers) {
  let factors = numbers.reduce((prev, curr) => prev + curr);

  let product = factors.reduce(getProduct, 1)

  function getProduct(total, num) {
    return total * num;
  }
 
  return product
};

const power = function(num1, num2) {
	let product = num1 ** num2

  return product
};

const factorial = function(num) {
	if (num === 0 || num === 1)
    return 1
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }

  return num
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
