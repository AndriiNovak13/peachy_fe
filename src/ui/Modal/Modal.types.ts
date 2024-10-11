import { ReactNode } from "react";
import { ModalProps as ChakraModalProps } from "@chakra-ui/react";

export interface ModalProps extends Omit<ChakraModalProps, "children"> {
  children?: ReactNode;
  title?: string;
  subtitle?: string | ReactNode;
  contentWidth?: string;
  isLoading?: boolean;
  onClose: () => void;
  onEdit?: () => void;
  onSubmit?: () => void;
  resetButtonText?: string | ReactNode;
  submitButtonText?: string | ReactNode;
  isSubmitDisabled?: boolean;
  centerButtons?: boolean;
}
