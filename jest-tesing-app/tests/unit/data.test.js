const data = require("../../data")

describe("absolute", () => {
  it("should return positive number if positive", () => {
    const result = data.absolute(1)
    expect(result).toBe(1)
  })
  it("should return positive number if negative", () => {
    const result = data.absolute(-1)
    expect(result).toBe(1)
  })
  it("should return zero number if zero", () => {
    const result = data.absolute(0)
    expect(result).toBe(0)
  })
})

describe('welcome', () => { 
  it('should return a greeting message', () => {
    const result = data.welcome('John') // pass in a string
    expect(result).toMatch(/John/) // use a regular expression
    expect(result).toContain('John') // check if result contains a string
  })
})