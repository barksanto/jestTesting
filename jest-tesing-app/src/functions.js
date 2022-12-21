const functions = {
  add: (num1, num2) => num1 + num2, // ES6 arrow function
  subtract: function (num1, num2) {
    return num1 + num2
  }, // ES5 function declaration
}

module.exports = functions
