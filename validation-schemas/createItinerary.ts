import * as Yup from "yup";

export const createIteneraryValidationSchema = Yup.object().shape({
  travel_origin: Yup.string().required("Please select your travel origin."),
  travel_destination: Yup.string().required(
    "Please select your travel destination."
  ),
  departure: Yup.string().required("Please select your departure date."),
  arrival: Yup.string().required("Please select your arrival date."),
});
