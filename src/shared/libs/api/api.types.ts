import { AxiosError } from "axios";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ApiErrorFormMessage {
  field: string;
  message: string;
}

export type ApiErrorMessage = ApiErrorFormMessage[] | string | null | undefined;

export interface ApiError {
  statusCode: number;
  message: ApiErrorMessage;
  error: string;
}

export type CommonApiError<T = ApiError> = AxiosError<T>;
