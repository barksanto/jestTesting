const functions = require("./functions")

test("adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4) // toBe() is a matcher
})

test("adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5) // toBe() is a matcher
})

test("Should be null", () => {
  expect(functions.isNull()).toBeNull() // toBeNull() is a matcher
})

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

test("First name should be Barkley", () => {
  expect(functions.createUser().firstName).toEqual("Barkley")
})

// toEqual() is used to compare objects
// toBe() is used to compare primitive types
// objects and arrays are reference types in JS
test("User should be Barkley Santo object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Barkley",
    lastName: "Santo",
  })
})

// Check for truthy or falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
