import type { Meta, StoryObj } from "@storybook/react";
import InputErrorComponent from "./InputError";

const meta = {
  title: "Components/Input error",
  component: InputErrorComponent,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof InputErrorComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputError: Story = {
  args: {
    children: "This is the input error message",
  },
};
