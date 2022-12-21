const functions = {
  add: (num1, num2) => num1 + num2, // ES6 arrow function
  subtract: function (num1, num2) {
    return num1 + num2
  }, // ES5 function declaration
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Barkley" }
    user["lastName"] = "Santo"
    return user
  },
}

module.exports = functions
