import { instance } from "@/shared/libs";

import { CreateUserRequest, CreateUserResponse } from "./createUser.types";

export const requestCreateUser = async (
  body: CreateUserRequest
): Promise<CreateUserResponse> => {
  return await instance.post("users", body);
};
