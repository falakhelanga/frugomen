import type { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";

const meta = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: "select",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    children: "Large title",
    size: "lg",
  },
};
export const Medium: Story = {
  args: {
    children: "Medium title",
    size: "md",
  },
};
export const Small: Story = {
  args: {
    children: "Small title",
    size: "sm",
  },
};
