import React from "react";
// hook
import { useRouter } from "hooks";

// styled components
import { MenuItemWrapper, ItemConatiner } from "./MenuItem.style";
// type
import { MenuItemProps } from "types/components/Menu";
import { Text } from "components/Text";

// --------------------------------------------------------------

const MenuItem: React.FC<MenuItemProps> = ({
  title = "",
  url = "",
  fDirection = "none",
  children,
}) => {
  const { move } = useRouter();
  const handleOnClick = () => {
    if (url != "") move(url);
  };
  return (
    <MenuItemWrapper fDirection={fDirection}>
      <Text
        fSize={14}
        fWeight={700}
        fColor="white"
        tFont="inter"
        tTransForm="uppercase"
        padding="15px 20px"
        className="menuTitle"
        onClick={() => handleOnClick()}
      >
        {title}
      </Text>
      <ItemConatiner className="itemContainer">{children}</ItemConatiner>
    </MenuItemWrapper>
  );
};
export default MenuItem;
