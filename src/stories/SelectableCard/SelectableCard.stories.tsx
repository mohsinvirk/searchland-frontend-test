import React from "react"
import { Story, Meta } from "@storybook/react"

import { SelectableCard, SelectableCardProps } from "../../Components"

import CardHeaderImage from "../assets/CardMedia.png"

export default {
  title: "SelectableCard",
  component: SelectableCard,
  argTypes: {
    onClick: {
      action: "click"
    }
  }
} as Meta<SelectableCardProps>

const Template: Story<SelectableCardProps> = (args) => <SelectableCard {...args} />

export const UnSelected = Template.bind({})

export const Selected = Template.bind({})

UnSelected.args = {
  id: "1",
  selected: false,
  label: "Flood zone 3",
  headerImageSrc: CardHeaderImage
}

Selected.args = {
  id: "2",
  selected: true,
  label: "Flood zone 3",
  headerImageSrc: CardHeaderImage
}
