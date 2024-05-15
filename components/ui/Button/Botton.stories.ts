import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";


const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes:{
    variant:{
      options:['solid','outline'],
      control:'select'
    },
   size:{
      options:['sm','md','lg'],
      control:'select'
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Solid Button",
    size: "lg",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
    size: "lg",
  },
};
