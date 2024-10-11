import { instance } from "@/shared/libs";

import { UpdateUserRequest } from "./updateUser.types";
import { CreateUserResponse } from "../useCreateUser";

export const requestUpdateUser = async ({
  userId,
  body
}: UpdateUserRequest): Promise<CreateUserResponse> => {
  return await instance.patch(`users/${userId}`, body);
};
