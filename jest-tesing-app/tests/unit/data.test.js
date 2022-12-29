const data = require("../../data")

// anything with it() is a test
// describe("absolute", () => {
//   it("should return positive number if positive", () => {
//     const result = data.absolute(1)
//     expect(result).toBe(1)
//   })
//   it("should return positive number if negative", () => {
//     const result = data.absolute(-1)
//     expect(result).toBe(1)
//   })
//   it("should return zero number if zero", () => {
//     const result = data.absolute(0)
//     expect(result).toBe(0)
//   })
// })

// describe("welcome", () => {
//   it("should return a greeting message", () => {
//     const result = data.welcome("John") // pass in a string
//     expect(result).toMatch(/John/) // use a regular expression
//     expect(result).toContain("John") // check if result contains a string
//   })
// })

// describe("sizes", () => {
//   it("should return all sizes in the array", () => {
//     // const result = data.sizes() // call the function to get the array stored in result
//     // expect(result).toHaveLength(3) // check if result has a length of 3
//     // expect(result).toContain("Small") // check if result contains a string
//     // expect(result).toContain("Medium") // check if result contains a string
//     // expect(result).toContain("Large") // check if result contains a string
//     const result = ["S", "M", "L"]
//     expect(result).toEqual(expect.arrayContaining(["S", "M", "L"]))
//   })
// })

// describe("getUser", () => {
//   it("should return an object with an id of 1 and and age of 20", () => {
//     const result = data.getUser(1)
//     expect(result).toEqual({ id: 1, age: 20 })
//   })
// })

// describe("createUser", () => {
//   it("should throw an error if email is falsy, and return user object", () => {
//     const args = [null, undefined, NaN, 0, "", false]
//     args.forEach((falsyValue) => {
//       expect(() => {
//         data.createUser(falsyValue)
//       }).toThrow()
//     })
//   })

//   it("should return user if its a valid email", () => {
//     const result = data.createUser("barkley@email.com")
//     const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
//     expect(result.email).toMatch(emailRegex) // using regex
//   })
// })

const db = require("../../fakeDb")

describe("discount", () => {
  it("should apply 20% discount if points greater than 10", () => {
    db.getUser = function (userId) { // replace the function with a mock function - keep this logic separate
      return { id: userId, points: 11 }
    }
    const order = { userId: 1, total: 80 }
    data.discount(order)
    expect(order.total).toBe(80)
  })
})


