import { instance } from "@/shared/libs";

import { queryParamsBuilder } from "@/shared/helpers";

import { GetUsersRequest, GetUsersResponse } from "./getUsers.types";

export const requestGetUsers = async ({
  params
}: GetUsersRequest): Promise<GetUsersResponse> => {
  return await instance.get(`users${queryParamsBuilder(params)}`);
};
