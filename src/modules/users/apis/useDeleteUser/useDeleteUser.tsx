import { useMutation } from "@tanstack/react-query";

import { ApiError, CommonApiError, MutationOptions } from "@/shared/libs";

import { requestDeleteUser } from "./deleteUser.request";

const useDeleteUser = (
  options?: MutationOptions<void, CommonApiError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestDeleteUser,
    ...options
  });
};

export default useDeleteUser;
