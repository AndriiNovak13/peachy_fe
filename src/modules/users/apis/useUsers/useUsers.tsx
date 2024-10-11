import { useQuery } from "@tanstack/react-query";

import { ApiError, QueryOptions } from "@/shared/libs";

import { requestGetUsers } from "./getUsers.request";
import { GetUsersRequest, GetUsersResponse } from "./getUsers.types";

const useUsers = (
  { params }: GetUsersRequest,
  options?: QueryOptions<GetUsersResponse, ApiError>
) => {
  const { data: usersData = { data: [], meta: { totalItems: 0 } }, ...rest } =
    useQuery({
      queryKey: ["users", params],
      queryFn: async () => {
        return await requestGetUsers({ params });
      },
      ...options
    });

  const users = usersData.data;
  const totalUsers = usersData.meta.totalItems;

  return { usersData, users, totalUsers, ...rest };
};

export default useUsers;
