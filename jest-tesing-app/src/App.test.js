import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  // jest expect
  // toBeInTheDocument is a jest-dom method / react testing library assertion
  // this is a unit test that runs regardless if app is running or not, doesn't need a server
  expect(linkElement).toBeInTheDocument()
})
