import { useQueryClient } from "@tanstack/react-query";

import { Modal } from "@/ui";

import { useDeleteUser } from "../../apis";

import { DeleteUserModalProps } from "./DeleteUserModal.types";

import { useToast } from "@/shared/hooks";
import { useNavigate } from "react-router-dom";

const DeleteUserModal = ({ userId, isOpen, onClose }: DeleteUserModalProps) => {
  const queryClient = useQueryClient();
  const { toastSuccess } = useToast();
  const navigate = useNavigate();

  const { mutate: mutateDeleteUser, isPending: isPendingDeleteUser } =
    useDeleteUser({
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });

        onClose();
        navigate("/");
        toastSuccess("User was deleted successfully!");
      }
    });

  const onDeleteUser = (userId: string | undefined) => {
    return () => (userId ? mutateDeleteUser({ userId }) : null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onDeleteUser(userId)}
      isLoading={isPendingDeleteUser}
      variant="danger"
      title="Delete User"
      subtitle="Are you sure you want to delete user?"
      submitButtonText="Yes, delete"
      resetButtonText="No"
    />
  );
};

export default DeleteUserModal;
