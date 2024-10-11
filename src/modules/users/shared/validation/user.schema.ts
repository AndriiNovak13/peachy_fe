import * as yup from "yup";

import { VALIDATOR } from "@/shared/constants";

export const AddUserSchema = yup.object().shape({
  firstName: VALIDATOR.firstName,
  lastName: VALIDATOR.lastName,
  email: VALIDATOR.email,
  profile: yup.object().shape({
    address: yup.string().trim().nullable(),
    company: yup.string().trim().nullable(),
    education: yup.string().trim().nullable(),
    bio: yup.string().trim().nullable()
  })
});
