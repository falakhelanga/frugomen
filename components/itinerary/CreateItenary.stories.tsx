import type { Meta, StoryObj } from "@storybook/react";
import CreateItenararySection from "./CreateItinerarySection";

const meta: Meta<typeof CreateItenararySection> = {
  title: "Sections/CreateItenerary",
  component: CreateItenararySection,
  args: {
    countries: [
      {
        flags: {
          png: "",
          svg: "",
          alt: "",
        },
        name: {
          common: "South Africa",
          official: "South Africa",
          nativeName: "RSA",
        },
      },
    ],
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CreateItenararySection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CreateItenerary: Story = {};
