import { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  SortingState,
  Row,
  RowSelectionState,
  OnChangeFn
} from "@tanstack/react-table";
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Icon,
  Text
} from "@chakra-ui/react";
import isEmpty from "lodash/isEmpty";

import { If } from "@/components";
import { Skeleton } from "../Skeleton";

import { ChevronDownIcon } from "@/assets/icons";

import { ESorting } from "@/shared/constants/enums";

import { TableProps, ColumnMeta } from "./Table.types";

const Table = <
  Data extends {
    id: number | unknown;
    isBlocked?: boolean;
  }
>({
  isLoading = false,
  columns,
  data,
  dataItemsName = "items",
  onRowClick,
  onChangeSorting,
  onSelectedRowsChange,
  resetSelection,
  footer
}: TableProps<Data>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const onSortingChange: OnChangeFn<SortingState> = (getSortingState) => {
    const sortingState =
      typeof getSortingState === "function"
        ? getSortingState(sorting)
        : getSortingState;

    const [sortValue] = sortingState;

    setSorting(sortingState);

    if (!onChangeSorting) {
      return;
    }

    onChangeSorting(sortValue || null);
  };

  const tableData = useMemo(
    () => (isLoading ? Array(8).fill({}) : data),
    [isLoading, data]
  );

  const table = useReactTable({
    columns,
    data: tableData,
    state: {
      sorting,
      rowSelection
    },
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange,
    enableRowSelection: (row: Row<Data>) =>
      row.original ? !row.original.isBlocked : false
  });

  useEffect(() => {
    const mappedRows: number[] | unknown[] = table
      .getSelectedRowModel()
      .rows.map((row: Row<Data>) => row.original.id);

    if (resetSelection) {
      table.resetRowSelection();
    }

    if (!onSelectedRowsChange) {
      return;
    }

    onSelectedRowsChange(mappedRows);
  }, [table, onSelectedRowsChange, resetSelection, rowSelection]);

  return (
    <Box>
      <ChakraTable>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const meta: ColumnMeta | undefined =
                  header.column.columnDef.meta;

                const canSort = header.column.getCanSort();
                const sorted = header.column.getIsSorted();

                return (
                  <Th
                    key={header.id}
                    cursor={canSort ? "pointer" : "default"}
                    isNumeric={meta?.isNumeric}
                    textAlign={meta?.align}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    <If condition={canSort}>
                      <Box as="span" position="relative">
                        <Icon
                          as={ChevronDownIcon}
                          boxSize="20px"
                          color={sorted ? "primary.text" : "darkGray.200"}
                          transform={
                            sorted === ESorting.ASC
                              ? "rotate(180deg)"
                              : "rotate(0deg)"
                          }
                        />
                      </Box>
                    </If>
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr
              key={row.id}
              onClick={() => {
                if (onRowClick) {
                  onRowClick(row);
                }
              }}
              cursor={onRowClick ? "pointer" : "auto"}
            >
              {row.getVisibleCells().map((cell) => {
                const meta: ColumnMeta | undefined = cell.column.columnDef.meta;

                return !isLoading ? (
                  <Td
                    key={cell.id}
                    isNumeric={meta?.isNumeric}
                    textAlign={meta?.align}
                    minWidth={meta?.minSize}
                    maxWidth={meta?.maxSize}
                    width={meta?.size}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ) : (
                  <Td key={cell.id}>
                    <Skeleton width="100%" height="44px" />
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
      <If condition={isEmpty(tableData)}>
        <Text color="darkGray.600" padding="8px 12px">
          No {dataItemsName} found...
        </Text>
      </If>
      <If condition={!isLoading}>{footer}</If>
    </Box>
  );
};

export default Table;
