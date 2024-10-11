import { instance } from "@/shared/libs";

import { DeleteUserRequest } from "./deleteUser.types";

export const requestDeleteUser = async ({
  userId
}: DeleteUserRequest): Promise<void> => {
  return await instance.delete(`users/${userId}`);
};
