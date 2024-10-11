import queryString from "query-string";
import isEmpty from "lodash/isEmpty";

interface QueryParamsBuilderOptions {
  isQuestionMark: boolean;
}

export const queryParamsBuilder = (
  params: Record<string, string | number | null>,
  options?: QueryParamsBuilderOptions
) => {
  if (isEmpty(params)) {
    return "";
  }

  const { isQuestionMark = true } = options ?? {};

  return `${isQuestionMark ? "?" : ""}${queryString.stringify(params, {
    skipEmptyString: true,
    skipNull: true
  })}`;
};
