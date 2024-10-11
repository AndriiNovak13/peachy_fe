import { useQueryClient } from "@tanstack/react-query";

const useSetQuery = <T>(queryKey: string[]) => {
  const queryClient = useQueryClient();

  return (data: T) => queryClient.setQueriesData({ queryKey }, data);
};

export default useSetQuery;
