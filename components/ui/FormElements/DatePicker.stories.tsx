import type { Meta, StoryFn } from "@storybook/react";
import DateInput from "./DatePicker";
import React from "react";
import withFormik from "@gentslava/storybook-formik";

const meta: Meta = {
  component: DateInput,
  decorators: [withFormik],
  title: "Components/Inputs/Datepicker",
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof DateInput>;
export default meta;

export const DatePicker: StoryFn = () => (
  <DateInput label="Date of birth" name="dob" />
);
DatePicker.parameters = {
  formik: {
    initialValues: {
      surname: "",
    },
  },
};
