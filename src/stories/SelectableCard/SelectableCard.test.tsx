import { render, screen } from "@testing-library/react"
import { composeStories } from "@storybook/testing-react"
import * as stories from "./SelectableCard.stories" // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Selected, UnSelected } = composeStories(stories)

test("unselected card have unchecked checkbox", () => {
  render(<UnSelected />)
  const cardElement = screen.getByRole("checkbox")
  expect(cardElement).not.toBeChecked()
})

test("unselected card have checkbox label Flood zone 3", () => {
  render(<UnSelected />)
  const cardElement = screen.getByText("Flood zone 3")
  expect(cardElement).toBeInTheDocument()
})

test("selected card have checked checkbox", () => {
  render(<UnSelected selected />) // you can override props and they will get merged with values from the Story's args
  const cardElement = screen.getByRole("checkbox")
  expect(cardElement).toBeChecked()
})

test("selected card have box shadow", () => {
  render(<Selected />)
  const cardElement = screen.getByTestId("selectable-card")
  expect(cardElement).toHaveStyle(`box-shadow: 0px 0px 0px 2px #65E9D9`)
})
