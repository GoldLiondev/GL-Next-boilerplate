import React from "react";
// type
import { MenuContainerProps, MenuItemType } from "types/components/Menu";
import { MenuItem } from "components/Menu";
// styled components
import { MenuContainerWrapper } from "./MenuContainer.style";

// --------------------------------------------------------------

const MenuContainer: React.FC<MenuContainerProps> = ({
  data = [],
  fDirection = "none",
}) => {
  return (
    <MenuContainerWrapper>
      {data.map((item: MenuItemType, index) => (
        <MenuItem
          fDirection={fDirection}
          title={item.title}
          key={`menu-item-${index}`}
          url={item.url}
        >
          {item?.subMenuItem ?? undefined}
        </MenuItem>
      ))}
    </MenuContainerWrapper>
  );
};
export default MenuContainer;
