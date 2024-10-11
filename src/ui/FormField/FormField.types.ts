import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface FormFieldProps {
  children: ReactNode;
  label?: string;
  errorMessage?: string | FieldError["message"];
}
