import { Box, Text } from "@chakra-ui/react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";
import { Dispatch, SetStateAction, useMemo } from "react";

import { Menu } from "@/ui";

import { setColumnMeta, truncateText } from "@/shared/helpers";
import { IUser } from "../../apis";

import { BinIcon, EditIcon, ThreeDotsIcon } from "@/assets/icons";

const columnHelper = createColumnHelper<IUser>();

interface ColumnProps {
  onOpenEdit: () => void;
  onOpenDelete: () => void;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
}

const useUsersColumns = ({
  onOpenEdit,
  onOpenDelete,
  setUser
}: ColumnProps) => {
  const handleMenuButtonClick = (
    cell: CellContext<IUser, string>,
    handleOpenModal: () => void
  ) => {
    return () => {
      handleOpenModal();
      setUser(cell.row.original);
    };
  };

  const getCellValue = (value: string | null) => {
    return value ? value : "Not specified";
  };

  const getCellTextColor = (value: string | null) => {
    return value ? "primary.text" : "darkGray.100";
  };

  const columns = useMemo(
    () => [
      columnHelper.accessor((row) => row.firstName, {
        id: "firstName",
        header: "Manager",
        enableSorting: false,
        meta: setColumnMeta("160px", "176px"),
        cell: (cell) => (
          <Text fontWeight="700">
            {cell.getValue()} {cell.row.original.lastName}
          </Text>
        )
      }),
      columnHelper.accessor((row) => row.email, {
        id: "email",
        header: "Email",
        enableSorting: false,
        meta: setColumnMeta("130px", "146px"),
        cell: (cell) => cell.getValue()
      }),
      columnHelper.accessor((row) => row.profile?.address, {
        id: "address",
        header: "Address",
        enableSorting: false,
        meta: setColumnMeta("130px", "146px"),
        cell: (cell) => (
          <Box
            textTransform="capitalize"
            color={getCellTextColor(cell?.getValue())}
          >
            {getCellValue(cell?.getValue())}
          </Box>
        )
      }),
      columnHelper.accessor((row) => row.profile?.company, {
        id: "company",
        header: "Company",
        enableSorting: false,
        meta: setColumnMeta("130px", "146px"),
        cell: (cell) => (
          <Box
            textTransform="capitalize"
            color={getCellTextColor(cell?.getValue())}
          >
            {getCellValue(cell?.getValue())}
          </Box>
        )
      }),
      columnHelper.accessor((row) => row.profile?.education, {
        id: "education",
        header: "Education",
        enableSorting: false,
        meta: setColumnMeta("130px", "146px"),
        cell: (cell) => (
          <Box
            textTransform="capitalize"
            color={getCellTextColor(cell?.getValue())}
          >
            {getCellValue(cell?.getValue())}
          </Box>
        )
      }),
      columnHelper.accessor((row) => row.profile?.bio, {
        id: "about",
        header: "About",
        enableSorting: false,
        meta: setColumnMeta("130px", "146px"),
        cell: (cell) => (
          <Box
            textTransform="capitalize"
            color={getCellTextColor(cell?.getValue())}
          >
            {cell.getValue()
              ? truncateText(cell.getValue(), 50)
              : "Not specified"}
          </Box>
        )
      }),
      columnHelper.accessor((row) => row.id, {
        header: "",
        id: "action",
        enableSorting: false,
        meta: setColumnMeta("24px", "52px", "42px"),
        cell: (cell) => (
          <Menu
            icon={ThreeDotsIcon}
            placement="bottom-end"
            menuItems={[
              {
                icon: EditIcon,
                label: "Edit",
                onClick: handleMenuButtonClick(cell, onOpenEdit)
              },
              {
                icon: BinIcon,
                label: "Delete",
                color: "red.1000",
                onClick: handleMenuButtonClick(cell, onOpenDelete)
              }
            ]}
          />
        )
      })
    ],
    []
  );

  return { columns };
};

export default useUsersColumns;
