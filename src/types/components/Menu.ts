import { ReactNode } from "react";

interface MenuProps {
  children?: ReactNode;
  [key: string]: unknown;
  fDirection?: "up" | "down" | "start" | "end" | "none";
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledProps extends MenuProps {}

export interface MenuItemProps extends StyledProps {
  title?: string;
  url?: string;
}
export interface MenuItemType {
  title: string;
  subMenuItem?: ReactNode;
  url?: string;
}

export interface MenuContainerProps extends MenuProps {
  data?: Array<MenuItemType>;
}
