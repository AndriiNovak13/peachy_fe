import { ContentLayout } from "@/layouts";

import { UsersTable, AddUserModal } from "../../components";
import { Button } from "@/ui";

import { PlusIcon } from "@/assets/icons";

import { useBoolean } from "@/shared/hooks";

const Users = () => {
  const {
    value: isOpenModal,
    setTrue: onOpenModal,
    setFalse: onCloseModal
  } = useBoolean();

  return (
    <ContentLayout
      title="Users"
      action={
        <Button
          leftIcon={<PlusIcon boxSize="20px" />}
          size="md"
          onClick={onOpenModal}
        >
          New User
        </Button>
      }
    >
      <UsersTable />
      <AddUserModal isOpen={isOpenModal} onClose={onCloseModal} />
    </ContentLayout>
  );
};

export default Users;
