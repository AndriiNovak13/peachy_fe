import { useMutation } from "@tanstack/react-query";

import { ApiError, CommonApiError, MutationOptions } from "@/shared/libs";

import { CreateUserResponse } from "../useCreateUser";

import { requestUpdateUser } from "./updateUser.request";

const useUpdateUser = (
  options?: MutationOptions<CreateUserResponse, CommonApiError<ApiError>>
) => {
  return useMutation({
    mutationKey: ["user"],
    mutationFn: requestUpdateUser,
    ...options
  });
};

export default useUpdateUser;
