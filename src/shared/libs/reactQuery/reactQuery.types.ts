import { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type QueryOptions<
  Response,
  TError = AxiosError,
  TData = Response
> = UseQueryOptions<Response, TError, TData, unknown[]>;

export type MutationOptions<
  Response,
  TError = AxiosError,
  TVariables = unknown
> = UseMutationOptions<Response, TError, TVariables, unknown>;
