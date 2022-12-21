const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2, // ES6 arrow function
  subtract: function(num1, num2) {
    return num1 + num2
  }, // ES5 function declaration
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Barkley" }
    user["lastName"] = "Santo"
    return user
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error"),
}

module.exports = functions
