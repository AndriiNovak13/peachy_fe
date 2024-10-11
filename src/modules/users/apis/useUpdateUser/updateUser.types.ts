import { CreateUserRequest } from "../useCreateUser/createUser.types";

export interface UpdateUserRequest {
  userId: string;
  body: CreateUserRequest;
}
