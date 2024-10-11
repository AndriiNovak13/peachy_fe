import { ReactNode } from "react";

export interface ContentLayoutProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  title: string;
  subtitle?: string;
  additional?: string | ReactNode;
  additionalPosition?: string;
  action?: ReactNode;
}
