import { ReactNode } from "react";
import { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

export interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
  variant?: string;
  size?: string;
  block?: boolean;
  danger?: boolean;
}
