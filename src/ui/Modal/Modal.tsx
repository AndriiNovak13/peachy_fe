import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  Box
} from "@chakra-ui/react";

import { Button } from "../Button";
import { If } from "@/components";

import { ModalProps } from "./Modal.types";

const Modal = ({
  children,
  title,
  subtitle,
  contentWidth,
  isLoading = false,
  isOpen,
  onClose,
  onEdit,
  onSubmit,
  resetButtonText = "Cancel",
  submitButtonText = "Save",
  isSubmitDisabled = false,
  variant,
  centerButtons = false,
  ...props
}: ModalProps) => {
  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick
      scrollBehavior="outside"
      {...props}
    >
      <ModalOverlay />
      <ModalContent marginBottom="0" maxWidth={contentWidth}>
        <ModalCloseButton />

        <ModalHeader>
          <Box
            fontWeight="bold"
            fontSize="18px"
            color="primary.text"
            lineHeight="24px"
          >
            {title}
          </Box>

          <If condition={!!subtitle}>
            <Box
              fontWeight="normal"
              fontSize="14px"
              color="darkGray.500"
              lineHeight="20px"
              marginTop="8px"
            >
              {subtitle}
            </Box>
          </If>
        </ModalHeader>

        <If condition={!!children}>
          <ModalBody
            maxWidth={contentWidth}
            css={{
              "&::-webkit-scrollbar": {
                display: "none"
              }
            }}
          >
            {children}
          </ModalBody>
        </If>

        <ModalFooter justifyContent={centerButtons ? "center" : "flex-end"}>
          <If condition={!!resetButtonText}>
            <Button variant="outline" onClick={onEdit ?? onClose}>
              {resetButtonText}
            </Button>
          </If>

          <Button
            onClick={onSubmit}
            danger={variant === "danger"}
            isDisabled={isSubmitDisabled}
            isLoading={isLoading}
          >
            {submitButtonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
