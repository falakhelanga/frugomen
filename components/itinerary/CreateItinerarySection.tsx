"use client";
import React from "react";
import Form from "../ui/FormElements/Form";
import DatePicker from "../ui/FormElements/DatePicker";
import { createIteneraryValidationSchema } from "@/validation-schemas/createItinerary";
import Button from "../ui/Button/Button";
import Search from "../ui/search-travel/Search";
import SelectInput from "../ui/FormElements/SelectInput";
import Title from "../ui/title/Title";

const purposeOfTravelOptions = [
  {
    key: "Marine & Offshore",
    value: "Marine & Offshore",
  },
  {
    key: "Visit Family",
    value: "Visit Family",
  },
  {
    key: "Work",
    value: "work",
  },
];

interface CreateItenararySectionProp {
  countries: Country[];
}

const CreateItenararySection = ({ countries }: CreateItenararySectionProp) => {
  const options: SelectInputOption[] = countries.map((country) => ({
    key: country.name.common,
    value: country.name.common,
  }));

  const inputs = [
    {
      type: "select",
      name: "travel_origin",
      options: [
        { key: "Please select your travel origin", value: "" },
        ...options,
      ],
      label: "Travel Origin",
      className: "col-span-2 mb-1",
    },
    {
      type: "select",
      name: "travel_destination",
      options: [
        { key: "Please select your travel destination", value: "" },
        ...options,
      ],
      label: "Travel Destination",
      className: "col-span-2 mb-1",
    },
    {
      type: "date-picker",
      name: "departure",
      label: "Departure",
      className: "md:col-span-1 col-span-2 mb-1",
    },
    {
      type: "date-picker",
      name: "arrival",
      label: "Arrival",
      className: "md:col-span-1 col-span-2 mb-1 ",
    },
    {
      type: "select",
      name: "purpose_travel",
      options: purposeOfTravelOptions,
      label: "Purpose of travel",
      className: "col-span-2 mb-1",
    },
  ];

  function onSubmit(values: any) {
    console.log(values);
  }

  const initialValues = {
    travel_origin: "",
    travel_destination: "",
    departure: "",
    arrival: "",
  };
  return (
    <div className="bg-dark-blue md:ml-3 px-8 h-full pt-6  w-full relative z-10 max-sm:overflow-y-auto">
      <Title>Create Itinerary</Title>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationShema={createIteneraryValidationSchema}
        className="mt-6 grid grid-cols-2 gap-x-3"
      >
        {inputs.map((input) => {
          return (
            <div className={input.className} key={input.name}>
              {input.type === "select" && (
                <SelectInput
                  name={input.name}
                  label={input.label}
                  options={input.options!}
                  className=""
                />
              )}
              {input.type === "date-picker" && (
                <DatePicker
                  name={input.name}
                  className={input.className}
                  label={input.label}
                />
              )}
            </div>
          );
        })}
        <div className="col-span-2">
          <span className="font-semibold">Add Travelers</span>
          <Search className="mt-1" />
        </div>

        <Button className="col-span-2 mt-4" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateItenararySection;
