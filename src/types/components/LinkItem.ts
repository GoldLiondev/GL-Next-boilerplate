import { ReactNode } from "react";

export interface LinkItemWrapperProps extends IconWrapperProps {
  title?: string;
  href?: string;
  icon?: ReactNode;
  iconSlot?: "start" | "end";
  iconDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  alignHorizontal?: "center" | "initial" | "flex-end" | "flex-start";
  alignVertical?: "center" | "initial" | "flex-end" | "flex-start";
  iconGaping?: number;
  handleClick?: () => void;
  [key: string]: unknown;
}
export interface IconWrapperProps {
  iconWidth?: number;
}
