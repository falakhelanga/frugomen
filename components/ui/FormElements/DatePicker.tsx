"use client";
import React, { useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputWrapper from "./InputWrapper";
import { useField } from "formik";
import Icon from "../icon/Icon";
import { Icons } from "@/types/icon-names";
import { twMerge } from "tailwind-merge";

interface DatePickerPropType {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  containerClassNames?: string;
  inputClassNames?: string;
  labelClassNames?: string;

  iconClassName?: string;
}

const DatePicker = ({
  name,
  placeholder,
  label,
  inputClassNames,
  containerClassNames,
  labelClassNames,
  className,
  iconClassName,
}: DatePickerPropType) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const datePickerRef = useRef<any>(null);
  return (
    <div className={`  ${containerClassNames}`}>
      <InputWrapper
        className={className}
        labelClassName={labelClassNames}
        name={name}
        label={label}
      >
        <>
          <div className="flex items-center w-full outline-none  pr-2 ">
            <ReactDatePicker
              ref={datePickerRef}
              placeholderText={placeholder}
              wrapperClassName="w-full"
              className={twMerge(
                `outline-none py-2 px-2 rounded-md  !w-full flex-1 bg-transparent `,
                inputClassNames
              )}
              selected={value}
              onChange={(date) => {
                helpers.setValue(date);
              }}
              dropdownMode="select"
              dateFormat="dd/MM/yyyy"
            />
            <Icon
              name={Icons.calendar}
              className={twMerge("fill-white", iconClassName)}
            />
          </div>
        </>
      </InputWrapper>

      <div
        className={`${
          meta.touched && meta.error ? "opacity-1" : "opacity-0"
        } text-red-600 text-sm  bg-opacity-10`}
      >
        {meta.error ? meta.error : "error"}
      </div>
    </div>
  );
};

export default DatePicker;
