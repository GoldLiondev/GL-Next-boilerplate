import { ReactNode } from "react";

export interface BreadcrumbsProps {
  separator?: string | ReactNode;
  items: Array<{ title: string; link: string }>;
}
