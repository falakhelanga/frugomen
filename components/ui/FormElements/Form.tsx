"use client";
import React from "react";
import { Formik, Form as FormiKForm, FormikHelpers } from "formik";
import * as Yup from "yup";

interface FormProps {
  children: React.ReactNode;
  className?: string;
  initialValues: any;
  validationShema?: Yup.ObjectSchema<any>;
  onSubmit: ((
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>) &
    ((values: any, { resetForm }: FormikHelpers<any>) => void);
}

const Form = ({
  children,
  className,
  initialValues,
  onSubmit,
  validationShema,
}: FormProps) => {
  return (
    <Formik
      validationSchema={validationShema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      <FormiKForm className={className}>{children}</FormiKForm>
    </Formik>
  );
};

export default Form;
