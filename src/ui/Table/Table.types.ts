import { ColumnDef, ColumnSort, Row } from "@tanstack/react-table";
import { ReactNode } from "react";

export interface TableProps<Data> {
  isLoading?: boolean;
  columns: Array<ColumnDef<Data>>;
  data: Data[];
  dataItemsName?: string;
  onRowClick?: (row: Row<Data>) => void;
  onChangeSorting?: (data: ColumnSort | null) => void;
  onSelectedRowsChange?: (rows: number[] | unknown[]) => void;
  resetSelection?: boolean;
  footer?: ReactNode | null;
}

export interface ColumnMeta {
  isNumeric?: boolean;
  size?: string | number;
  minSize?: string | number;
  maxSize?: string | number;
  align?: "left" | "center" | "right";
}
