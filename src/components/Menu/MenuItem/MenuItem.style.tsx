// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// type
import { StyledProps } from "types/components/Menu";

// --------------------------------------------------------

export const MenuItemWrapper = styled.div<StyledProps>`
  line-height: 1;
  cursor: pointer;
  transition: background-color 300ms ease-in-out;
  .menuTitle {
    transition: color 300ms ease-in-out;
  }
  :hover {
    .menuTitle {
      color: ${themeGet("colors.black.100")};
    }
    .itemContainer {
      display: block;
    }
    background: ${themeGet("colors.gray.400")};
  }
  ::before {
    width: 1px;
    height: 100%;
    content: "";
    background: #b00026;
    position: absolute;
    top: 0;

    ${({ fDirection }) => {
      if (fDirection === "start") {
        return `right: -1px;`;
      } else if (fDirection === "end") {
        return `left: -1px;`;
      } else {
        return `width : 0px;`;
      }
    }}
    z-index: 1;
  }
`;
export const ItemConatiner = styled.div`
  display: none;
  position: fixed;
  left: 0;
  width: 100%;
  background: ${themeGet("colors.white")};
  box-shadow: 0px 2.7px 3.3px rgba(0, 0, 0, 0.04),
    0px 8.9px 11.2px rgba(0, 0, 0, 0.06), 0px 40px 50px rgba(0, 0, 0, 0.1);
`;
