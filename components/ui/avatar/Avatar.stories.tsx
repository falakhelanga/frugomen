import type { Meta, StoryObj } from "@storybook/react";
import AvatarComponent from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: AvatarComponent,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof AvatarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
  args: { image: "/images/profile-placeholder.jpeg" },
};
