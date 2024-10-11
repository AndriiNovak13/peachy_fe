import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { Textarea, Flex, Text } from "@chakra-ui/react";

import { Input, Modal } from "@/ui";

import { useCreateUser, useUpdateUser } from "../../apis";

import { AddUserSchema } from "../../shared/validation";

import { AddUserModalProps, FormDataProps } from "./AddUserModal.types";
import { useToast } from "@/shared/hooks";

const AddUserModal = ({ userData, isOpen, onClose }: AddUserModalProps) => {
  const queryClient = useQueryClient();
  const { toastSuccess } = useToast();

  const {
    firstName = "",
    lastName = "",
    email = "",
    profile = { address: null, company: null, education: null, bio: null }
  } = userData ?? {};

  const {
    register,
    formState: { errors },
    setError,
    reset,
    handleSubmit
  } = useForm<FormDataProps>({
    values: {
      firstName,
      lastName,
      email,
      profile: {
        address: profile?.address,
        company: profile?.company,
        education: profile?.education,
        bio: profile?.bio
      }
    },
    resolver: yupResolver(AddUserSchema)
  });

  const onCloseModal = () => {
    onClose();
    reset();
  };

  const { mutate: mutateCreateUser, isPending: isPendingCreateUser } =
    useCreateUser({
      meta: {
        setError
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
        onCloseModal();

        toastSuccess("User was added successfully!");
      }
    });

  const { mutate: mutateUpdateUser, isPending: isPendingUpdateUser } =
    useUpdateUser({
      meta: {
        setError
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
        onCloseModal();

        toastSuccess("Manager was edited successfully!");
      }
    });

  const onSubmit: SubmitHandler<FormDataProps> = (formData) => {
    const body = { ...formData };

    if (userData) {
      mutateUpdateUser({ userId: userData.id, body });
    } else {
      mutateCreateUser(body);
    }
  };

  return (
    <Modal
      title={!userData ? "New User" : "Edit User"}
      submitButtonText={!userData ? "Create User" : "Update User"}
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit(onSubmit)}
      isLoading={!userData ? isPendingCreateUser : isPendingUpdateUser}
      contentWidth="500px"
    >
      <Flex gap="10px">
        <Input
          label="First name"
          placeholder="First name"
          {...register("firstName")}
          errorMessage={errors.firstName?.message}
        />
        <Input
          label="Last name"
          placeholder="Last name"
          {...register("lastName")}
          errorMessage={errors.lastName?.message}
        />
      </Flex>

      <Input
        label="Email"
        placeholder="Email"
        {...register("email")}
        errorMessage={errors.email?.message}
      />

      <Text fontWeight="700">Profile Information</Text>

      <Flex
        direction="column"
        fontWeight="700"
        gap="10px"
        border="1px solid"
        borderColor="gray"
        borderRadius="12px"
        backgroundColor="lightGray.200"
        padding="10px"
      >
        <Input
          asTag={Textarea}
          label="Bio"
          placeholder="Bio"
          {...register("profile.bio")}
          errorMessage={errors.profile?.bio?.message}
        />

        <Input
          label="Address"
          placeholder="Address"
          {...register("profile.address")}
          errorMessage={errors.profile?.address?.message}
        />

        <Input
          label="Education"
          placeholder="Education"
          {...register("profile.education")}
          errorMessage={errors.profile?.education?.message}
        />

        <Input
          label="Company"
          placeholder="Company"
          {...register("profile.company")}
          errorMessage={errors.profile?.company?.message}
        />
      </Flex>
    </Modal>
  );
};

export default AddUserModal;
