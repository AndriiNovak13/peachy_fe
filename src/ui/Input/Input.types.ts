import {
  InputProps as ChakraInputProps,
  TextareaProps as ChakraTextareaProps
} from "@chakra-ui/react";
import { ElementType } from "react";

import { FormFieldProps } from "../FormField";

export interface InputProps
  extends ChakraInputProps,
    Omit<FormFieldProps, "children"> {
  value?: string;
  size?: string;
  isPassword?: boolean;
  icon?: JSX.Element | null;
  asTag?: ElementType;
  warningInfo?: string;
}

export interface TextareaProps
  extends ChakraTextareaProps,
    Omit<FormFieldProps, "children"> {
  value?: string;
  size?: string;
  isPassword?: boolean;
  icon?: JSX.Element | null;
  asTag?: ElementType;
  warningInfo?: string;
}
