import { useQueryClient } from "@tanstack/react-query";

const useRefetchQuery = (queryKey: string[]) => {
  const queryClient = useQueryClient();

  return async () => await queryClient.invalidateQueries({ queryKey });
};

export default useRefetchQuery;
