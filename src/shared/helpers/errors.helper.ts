/* eslint-disable @typescript-eslint/no-explicit-any */

import { UseFormSetError } from "react-hook-form";

import { ApiErrorMessage } from "@/shared/libs";

export const setFormErrors = (
  errors: ApiErrorMessage,
  setError: UseFormSetError<any>
) => {
  if (Array.isArray(errors)) {
    return errors?.forEach(({ field, message }) =>
      setError(field, { message })
    );
  }
};
