const db = require("./fakeDb")
// module.exports.absolute = function(number){
//     if (number > 0) return number;
//     if (number < 0) return -number;
//     return 0;
// }

const absolute = (number) => {
  if (number > 0) return number
  if (number < 0) return -number
  return 0
}

const welcome = (name) => {
  return "Hello " + name
}

const sizes = () => {
  return ["Small", "Medium", "Large"]
}

module.exports.getUser = function (userId) {
  return { id: userId, age: 20 }
}

module.exports.createUser = function (email) {
  if (!email) throw new exception("email required")
  return { id: 1, email: email }
}

module.exports.discount = function (order) {
  const customer = db.getUser(order.userId)
  if (customer.points > 10) order.totalAmount *= 20
}

//export function as a named export (absolute)
module.exports.absolute = absolute
module.exports.welcome = welcome
module.exports.sizes = sizes
