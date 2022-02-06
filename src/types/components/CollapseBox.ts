import { ReactNode } from "react";

// ---------------------------------
export interface CollapeBoxProps {
  hide: boolean;
}
export interface CollapseWrapperProps extends AccordionPorps {
  hide: boolean;
  handleOpen: () => void;
}
export interface AccordionPorps extends AccordionItemPorps {
  handleOpen: (current: string) => void;
  current?: string;
}
export interface AccordionItemPorps {
  title: string;
  param?: string;
  aId: string;
  children?: ReactNode;
}
export interface CollapeContainerProps {
  items: Array<AccordionItemPorps>;
  options?: any;
}
