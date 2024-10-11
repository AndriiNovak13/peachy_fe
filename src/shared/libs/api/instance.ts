import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig
} from "axios";
import { Cookies } from "react-cookie";
import createAuthRefreshInterceptor from "axios-auth-refresh";

import {
  API_URL,
  COOKIE_ACCESS_TOKEN_NAME,
  COOKIE_OPTIONS,
  COOKIE_REFRESH_TOKEN_NAME
} from "@/shared/constants";
import { AuthResponse } from "./api.types";

const cookies = new Cookies();

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = cookies.get(COOKIE_ACCESS_TOKEN_NAME);

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  async (error: AxiosError) => {
    return await Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response.data;
  },
  async (error: AxiosError) => {
    return await Promise.reject(error);
  }
);

export const setHeaderToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const refreshAuth = async (
  failedRequest: AxiosResponse<AuthResponse>
) => {
  try {
    const refreshToken = cookies.get(COOKIE_REFRESH_TOKEN_NAME);

    const response: AxiosResponse<AuthResponse> = await axios.post(
      `${API_URL}auth/staff/refresh-token`,
      {
        refreshToken
      }
    );

    const { accessToken, refreshToken: newRefreshToken } = response.data;

    if (accessToken && newRefreshToken) {
      cookies.set(COOKIE_ACCESS_TOKEN_NAME, accessToken, COOKIE_OPTIONS);
      cookies.set(COOKIE_REFRESH_TOKEN_NAME, newRefreshToken, COOKIE_OPTIONS);

      setHeaderToken(accessToken);

      failedRequest.config.headers.Authorization = `Bearer ${accessToken}`;

      return await Promise.resolve(response.data.accessToken);
    } else {
      cookies.remove(COOKIE_ACCESS_TOKEN_NAME, COOKIE_OPTIONS);
      cookies.remove(COOKIE_REFRESH_TOKEN_NAME, COOKIE_OPTIONS);

      return await Promise.reject(new Error("Failed to refresh tokens"));
    }
  } catch (error) {
    cookies.remove(COOKIE_ACCESS_TOKEN_NAME, COOKIE_OPTIONS);
    cookies.remove(COOKIE_REFRESH_TOKEN_NAME, COOKIE_OPTIONS);

    return await Promise.reject(error);
  }
};

createAuthRefreshInterceptor(instance, refreshAuth, {
  statusCodes: [401],
  pauseInstanceWhileRefreshing: true
});
