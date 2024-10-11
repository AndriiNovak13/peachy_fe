import { ColumnDef, ColumnSort } from "@tanstack/react-table";
import { ReactNode } from "react";

export interface TableProps<Data> {
  isLoading?: boolean;
  columns: Array<ColumnDef<Data>>;
  data: Data[];
  dataItemsName?: string;
  navigationPath?: string;
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
