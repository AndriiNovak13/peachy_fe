import { useState } from "react";

const usePagination = ({ defaultPage = 1, defaultSearch = "" } = {}) => {
  const [page, setPage] = useState(defaultPage);
  const [search, setSearch] = useState(defaultSearch);

  const onChangePage = (currentPage: number) => {
    setPage(currentPage);
  };

  const onSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return {
    page,
    perPage: 10,
    search,
    onChangePage,
    onSearch
  };
};

export default usePagination;
