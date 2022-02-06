import { ComponentType, Dispatch } from "react";

export interface TopBarContextProps {
  opened: string;
  param?: any;
}

export interface TopBarActionProps {
  type: string;
  payload?: any;
}

export interface TopBarStyledProps {
  opened: boolean;
}

export interface TopBarContextType {
  topBarState: TopBarContextProps;
  topBarDispatch: Dispatch<TopBarActionProps>;
}
export interface TopBarProviderType {
  items?: Array<TopBarItemType>;
}
export interface TopBarItemType {
  id: string;
  barItem: ComponentType;
}
