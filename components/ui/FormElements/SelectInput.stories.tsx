import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Input from "./SelectInput";
import React from "react";
import withFormik from "@gentslava/storybook-formik";

const meta: Meta = {
  component: Input,
  decorators: [withFormik],
  title: "Components/Inputs/Select",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Select you car",
  },
} satisfies Meta<typeof Input>;
export default meta;

export const SelectInput: StoryFn<typeof meta> = () => (
  <Input
    label="Cars"
    name="car"
    options={[
      {
        key: "Please select your car",
        value: "surname",
      },
      {
        key: "Mercedes",
        value: "mercedes",
      },
      {
        key: "BMW",
        value: "BMW",
      },
      {
        key: "Jaguar",
        value: "jaguar",
      },
      {
        key: "Other",
        value: "other",
      },
    ]}
  />
);
SelectInput.parameters = {
  formik: {
    initialValues: {
      surname: "",
    },
  },
};
