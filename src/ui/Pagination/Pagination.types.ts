export type PaginationType =
  | "page"
  | "prev"
  | "next"
  | "jump-prev"
  | "jump-next";

export interface PaginationProps {
  currentPage: number;
  perPage?: number;
  totalItems?: number;
  hideOnSinglePage?: boolean;
  onChange: (page: number) => void;
}
