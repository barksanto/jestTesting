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

//export function as a named export (absolute)
module.exports.absolute = absolute
module.exports.welcome = welcome
