import { ReactNode } from "react";

// -------------------------------------------------------

interface InputProps {
  children?: ReactNode;
  [key: string]: unknown;
}
export interface StyledProps extends InputProps {
  disabled?: boolean;
}

export interface InputItemProps extends StyledProps {
  loading?: boolean;
  icon?: any;
  placeholder?: string;
}

export interface InputContainerProps extends InputProps {
  iColor?:
    | "primary"
    | "white"
    | "black"
    | "gray"
    | "gray100"
    | "outlinedRed"
    | "outlinedGray";
  iSize?: "big" | "small" | "medium";
  iFont?: "sm" | "bold" | "normal" | "medium" | "smbold";
}
export interface InputHocProps extends InputContainerProps {
  inputIcon?: ReactNode;
}
