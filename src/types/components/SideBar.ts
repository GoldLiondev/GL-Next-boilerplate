import { ComponentType, Dispatch } from "react";

export interface SideBarContextProps {
  opened: string;
  param?: any;
}

export interface SideBarActionProps {
  type: string;
  payload?: any;
}

export interface SideBarStyledProps {
  opened: boolean;
}

export interface SideBarContextType {
  sideBarState: SideBarContextProps;
  sideBarDispatch: Dispatch<SideBarActionProps>;
}
export interface SideBarProviderType {
  items?: Array<SideBarItemType>;
}
export interface SideBarItemType {
  id: string;
  barItem: ComponentType;
}
