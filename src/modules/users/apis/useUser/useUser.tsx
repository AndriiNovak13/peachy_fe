import { useQuery } from "@tanstack/react-query";

import { ApiError, QueryOptions } from "@/shared/libs";

import { requestGetUser } from "./getUser.request";
import { GetUserRequest, GetUserResponse } from "./getUser.types";

const useUser = (
  { userId }: GetUserRequest,
  options?: QueryOptions<GetUserResponse, ApiError>
) => {
  const { data: userData = { user: undefined }, ...rest } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      return await requestGetUser({ userId });
    },
    ...options
  });

  const { user } = userData;

  return { user, userData, ...rest };
};

export default useUser;
