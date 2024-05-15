import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ButtonVariant } from "@/types/button-variants";
import IconComponent from "./Icon";
import { Icons } from "@/types/icon-names";

const meta = {
  title: "Components/Icon",
  component: IconComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      options: Object.values(Icons).filter((key) => isNaN(+key)),
      control: "select",
    },
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: "select",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Icon: Story = {
  args: {
    name: Icons.home,
  },
};
