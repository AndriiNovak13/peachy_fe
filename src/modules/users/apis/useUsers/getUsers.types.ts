import { IUser } from "../useCreateUser";

export interface GetUsersRequest {
  params: Record<"page" | "perPage" | "search", string | number | null>;
}

export interface ResponseMeta {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  perPage: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

export interface GetUsersResponse {
  data: IUser[];
  meta: ResponseMeta;
}
