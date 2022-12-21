const functions = require("./functions")

// Check for truthy or falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

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

// toBeLessThan and toBeLessThanOrEqual

test("Should be under 1600", () => {
  const load1 = 800
  const load2 = 700
  expect(load1 + load2).toBeLessThan(1600)
})

// can test regex as well

test("There is no I in team", () => {
  expect("team").not.toMatch(/I/) // remember to use /I/ instead of /i/
})

// Arrays
test("Admin should be in usernames", () => {
  const usernames = ["john", "karen", "admin"]
  expect(usernames).toContain("admin")
})

// working with async data/ axios
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1) // this is needed when using async await
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham")
//   })
// })


// Async await
test("User fetched name should be Leanne Graham", async () => { 
  expect.assertions(1) // this is needed when using async await
  const data = await functions.fetchUser()
  expect(data.name).toEqual("Leanne Graham")
})
