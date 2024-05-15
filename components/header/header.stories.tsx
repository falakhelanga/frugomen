import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import HeaderComponent from "./header";

const meta = {
  title: "Sections/Header",
  component: HeaderComponent,

  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {};
