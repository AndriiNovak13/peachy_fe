import { APP_NAME } from "./common";

export const COOKIE_ACCESS_TOKEN_NAME = `${APP_NAME}-access-token`;
export const COOKIE_REFRESH_TOKEN_NAME = `${APP_NAME}-refresh-token`;
export const COOKIE_OPTIONS = {
  path: "/",
  secure: import.meta.env.PROD
};
