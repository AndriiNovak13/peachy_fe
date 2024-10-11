import * as yup from "yup";

import {
  FIELD_REQUIRED_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
  NO_SPACES_EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
  PASSWORD_LENGTH_ERROR_MESSAGE,
  REPEAT_PASSWORD_ERROR_MESSAGE,
  FIELD_INCORRECT_ERROR_MESSAGE
} from "./errorMessages";
import {
  EMAIL_REGEX,
  NAME_REGEX,
  NO_SPACES_REGEX,
  PASSWORD_REGEX
} from "./regexes";

export const VALIDATOR = {
  email: yup
    .string()
    .trim()
    .required(FIELD_REQUIRED_ERROR_MESSAGE())
    .matches(EMAIL_REGEX, EMAIL_ERROR_MESSAGE)
    .matches(NO_SPACES_REGEX, NO_SPACES_EMAIL_ERROR_MESSAGE),
  password: yup
    .string()
    .required(FIELD_REQUIRED_ERROR_MESSAGE())
    .min(8, PASSWORD_LENGTH_ERROR_MESSAGE)
    .matches(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE),
  repeatPassword: (fieldName = "password") =>
    yup
      .string()
      .required(FIELD_REQUIRED_ERROR_MESSAGE())
      .oneOf([yup.ref(fieldName)], REPEAT_PASSWORD_ERROR_MESSAGE),
  firstName: yup
    .string()
    .trim()
    .required(FIELD_REQUIRED_ERROR_MESSAGE())
    .min(2, "First name field should contain more than 2 characters.")
    .max(10, "First name field cannot contain more than 10 characters.")
    .matches(NAME_REGEX, FIELD_INCORRECT_ERROR_MESSAGE("First name")),
  lastName: yup
    .string()
    .trim()
    .required(FIELD_REQUIRED_ERROR_MESSAGE())
    .min(2, "Last name field should contain more than 2 characters.")
    .max(16, "Last name field cannot contain more than 16 characters.")
    .matches(NAME_REGEX, FIELD_INCORRECT_ERROR_MESSAGE("Last name"))
};
