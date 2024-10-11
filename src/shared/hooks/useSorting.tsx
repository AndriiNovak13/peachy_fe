import { useState } from "react";
import { ColumnSort } from "@tanstack/react-table";

import { ESorting } from "../constants";

const useSorting = () => {
  const [orderBy, setOrderBy] = useState<Record<string, ESorting> | null>(null);

  const onChangeOrderBy = (sorter: ColumnSort | null) => {
    if (!sorter) {
      return;
    }

    const fieldName = sorter.id;
    const order = sorter.desc ? ESorting.DESC : ESorting.ASC;

    return order
      ? setOrderBy({ [`orderBy[${fieldName}]`]: order })
      : setOrderBy(null);
  };

  return { orderBy, onChangeOrderBy };
};

export default useSorting;
