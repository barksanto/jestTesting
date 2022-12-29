module.exports.getUser = function (userId) {
  console.log("Retreiving user from database...")
  return { id: userId, points: 11 }
}

