import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  [key: string]: unknown;
}
export interface StyledProps extends ButtonProps {
  disabled?: boolean;
}

export interface ButtonItemProps extends StyledProps {
  loading?: boolean;
  icon?: any;
}

export interface ButtonContainerProps extends ButtonProps {
  bColor?: "primary" | "white";
  bSize?: "big" | "small" | "medium" | "normal";
}
