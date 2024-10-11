import { useState } from "react";
import { AxiosError } from "axios";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

import { useQueryErrorHandler } from "./useQueryErrorHandler";

export const useQueryClientProvider = () => {
  const queryErrorHandler = useQueryErrorHandler();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0
          }
        },
        queryCache: new QueryCache({
          onError: queryErrorHandler
        }),
        mutationCache: new MutationCache({
          onError: (error: AxiosError, _variables, _context, mutation) =>
            queryErrorHandler(error, mutation)
        })
      })
  );

  return queryClient;
};
