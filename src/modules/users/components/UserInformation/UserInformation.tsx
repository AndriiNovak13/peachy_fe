import { Box, Flex } from "@chakra-ui/react";

import { useParams } from "react-router-dom";

import { ContentLayout } from "@/layouts";

import { AddUserModal } from "../AddUserModal";
import { DeleteUserModal } from "../DeleteUserModal";
import { Button } from "@/ui";

import { useUser } from "../../apis";

import { useBoolean } from "@/shared/hooks";

import { BinIcon, EditIcon } from "@/assets/icons";

const UserInformation = () => {
  const { userId } = useParams();

  const {
    value: isOpenDeleteModal,
    setTrue: onOpenDeleteModal,
    setFalse: onCloseDeleteModal
  } = useBoolean();

  const {
    value: isOpenEditModal,
    setTrue: onOpenEditModal,
    setFalse: onCloseEditModal
  } = useBoolean();

  const { user } = useUser(
    { userId },
    { queryKey: ["user", userId], enabled: !!userId }
  );

  const getUserInfoValue = (value?: string | null) => {
    return value ? value : "Not specified";
  };

  return (
    <ContentLayout
      title="User Details"
      action={
        <Flex gap="10px">
          <Button
            leftIcon={<EditIcon boxSize="20px" />}
            variant="outline"
            size="md"
            onClick={onOpenEditModal}
          >
            Edit User
          </Button>
          <Button
            leftIcon={<BinIcon boxSize="20px" />}
            danger
            size="md"
            onClick={onOpenDeleteModal}
          >
            Delete User
          </Button>
        </Flex>
      }
    >
      <Box marginBottom="8px">
        <b>Personal Information:</b>
      </Box>
      <Box>
        <b>User:</b> {`${user?.firstName} ${user?.lastName}`}
      </Box>
      <Box>
        <b>Email:</b> {user?.email}
      </Box>
      <Box margin="8px 0">
        <b>Profile Information:</b>
      </Box>
      <Box>
        <b>Bio:</b> {getUserInfoValue(user?.profile?.bio)}
      </Box>
      <Box>
        <b>Address:</b> {getUserInfoValue(user?.profile?.address)}
      </Box>
      <Box>
        <b>Company:</b> {getUserInfoValue(user?.profile?.company)}
      </Box>
      <Box>
        <b>Education:</b> {getUserInfoValue(user?.profile?.education)}
      </Box>
      <AddUserModal
        isOpen={isOpenEditModal}
        onClose={onCloseEditModal}
        userData={user}
      />
      <DeleteUserModal
        isOpen={isOpenDeleteModal}
        onClose={onCloseDeleteModal}
        userId={user?.id}
      />
    </ContentLayout>
  );
};

export default UserInformation;
