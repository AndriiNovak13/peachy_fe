import { useMutation } from "@tanstack/react-query";

import { ApiError, CommonApiError, MutationOptions } from "@/shared/libs";

import { requestCreateUser } from "./createUser.request";

import { CreateUserResponse } from "./createUser.types";

const useCreateUser = (
  options?: MutationOptions<CreateUserResponse, CommonApiError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestCreateUser,
    ...options
  });
};

export default useCreateUser;
