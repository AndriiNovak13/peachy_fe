import { useQueryClient } from "@tanstack/react-query";

const useGetQuery = <T>(queryKey: string[]) => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData<T>(queryKey);
};

export default useGetQuery;
