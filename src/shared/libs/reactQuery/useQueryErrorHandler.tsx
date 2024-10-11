import { Mutation, Query } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { FieldValues, UseFormSetError } from "react-hook-form";

import { ApiErrorMessage } from "../api";

import { setFormErrors } from "@/shared/helpers";
import { EHttpStatusCode } from "@/shared/constants";
import { useToast } from "@/shared/hooks";

export const useQueryErrorHandler = () => {
  const { toastError } = useToast();

  return (
    error: AxiosError,
    query:
      | Query<unknown, unknown, unknown>
      | Mutation<unknown, unknown, unknown, unknown>
  ) => {
    if (error.response) {
      const { status, data }: AxiosResponse = error.response;

      if (
        [
          EHttpStatusCode.BAD_REQUEST,
          EHttpStatusCode.FORBIDDEN,
          EHttpStatusCode.UNPROCESSABLE_CONTENT
        ].includes(status) &&
        !query.meta?.preventDefaultBadRequest
      ) {
        const isArrayErrorMessage = Array.isArray(data.message);

        if (query.meta?.setError && isArrayErrorMessage) {
          return setFormErrors(
            data.message as ApiErrorMessage,
            query.meta.setError as UseFormSetError<FieldValues>
          );
        }

        return toastError(
          !isArrayErrorMessage
            ? (data.message as string)
            : "Something went wrong!"
        );
      }

      if (
        status === EHttpStatusCode.NOT_FOUND ||
        status >= EHttpStatusCode.INTERNAL_SERVER_ERROR
      ) {
        return toastError(`${data.message ?? error.message}`);
      }
    }

    return error;
  };
};
