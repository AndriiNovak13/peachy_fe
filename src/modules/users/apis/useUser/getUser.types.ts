import { IUser } from "../useCreateUser";

export interface GetUserRequest {
  userId?: string;
}

export interface GetUserResponse {
  user: IUser;
}
