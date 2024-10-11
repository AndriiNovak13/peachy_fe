import { instance } from "@/shared/libs";

import { GetUserRequest, GetUserResponse } from "./getUser.types";

export const requestGetUser = async ({
  userId
}: GetUserRequest): Promise<GetUserResponse> => {
  return await instance.get(`users/${userId}`);
};
