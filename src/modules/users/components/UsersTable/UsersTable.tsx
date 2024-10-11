import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ColumnDef, Row } from "@tanstack/react-table";
import { Flex, Icon } from "@chakra-ui/react";

import { Input, Pagination, Table } from "@/ui";
import { AddUserModal } from "../AddUserModal";
import { DeleteUserModal } from "../DeleteUserModal";
import { If } from "@/components";

import { IUser, useUsers } from "../../apis";

import { useUsersColumns } from "../../shared/hooks";
import { useBoolean, useDebounce, usePagination } from "@/shared/hooks";

import { SearchIcon } from "@/assets/icons";

const UsersTable = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>();
  const { page, perPage, search, onChangePage, onSearch } = usePagination();

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    onSearch(event.target.value);
  };

  const debouncedSearchValue = useDebounce(search, 300);

  const {
    value: isOpenEdit,
    setTrue: onOpenEdit,
    setFalse: onCloseEdit
  } = useBoolean();

  const {
    value: isOpenDelete,
    setTrue: onOpenDelete,
    setFalse: onCloseDelete
  } = useBoolean();

  const {
    users,
    totalUsers,
    isPending: isLoadingUsers
  } = useUsers({
    params: { page, perPage, search: debouncedSearchValue }
  });

  const onClickUser = (row: Row<IUser>) => {
    navigate(`/users/${row.original.id}`);
  };

  const { columns } = useUsersColumns({ onOpenEdit, onOpenDelete, setUser });

  return (
    <Flex flexDirection="column" gap="16px">
      <Input
        value={search}
        onChange={onChangeSearchValue}
        icon={<Icon as={SearchIcon} />}
        placeholder="Search"
        width="342px"
      />

      <Table
        data={users}
        columns={columns as Array<ColumnDef<IUser>>}
        dataItemsName="users"
        onRowClick={onClickUser}
        isLoading={isLoadingUsers}
        footer={
          <Pagination
            currentPage={page}
            totalItems={totalUsers}
            onChange={onChangePage}
          />
        }
      />

      <If condition={isOpenEdit}>
        <AddUserModal isOpen onClose={onCloseEdit} userData={user} />
      </If>

      <DeleteUserModal
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        userId={user?.id}
      />
    </Flex>
  );
};

export default UsersTable;
