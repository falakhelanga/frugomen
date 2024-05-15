"use client";
import InputWrapper from "./InputWrapper";
import React, { ComponentProps } from "react";
import { useField } from "formik";
import InputError from "../Input-error/InputError";

type SelectInputProps = {
  options: SelectInputOption[];
  className?: string;
  labelClassName?: string;
  name: string;
  label: string;
} & ComponentProps<"select">;

const SelectInput = ({
  options,
  className,
  label,
  name,
  labelClassName,

  ...rest
}: SelectInputProps) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  return (
    <div>
      <InputWrapper
        className={className}
        name={name}
        label={label}
        labelClassName={labelClassName}
      >
        <select
          value={value}
          onChange={(e) => {
            helpers.setValue(e.target.value);
          }}
          className="bg-transparent w-full py-3 outline-none"
          name={name}
          {...rest}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.key}
            </option>
          ))}
        </select>
      </InputWrapper>
      {meta.touched && meta.error ? (
        <InputError> {meta.error ? meta.error : "error"}</InputError>
      ) : (
        <div className="opacity-0">error</div>
      )}
    </div>
  );
};

export default SelectInput;
