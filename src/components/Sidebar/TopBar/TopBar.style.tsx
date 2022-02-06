// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// type
import { SideBarStyledProps } from "types/components/SideBar";

// --------------------------------------------------------

export const TopBarWrapper = styled.div<SideBarStyledProps>`
  position: fixed;
  top: 72px;
  left: 0;
  display: ${({ opened }) => (opened ? "block" : "none")};
  width: 100%;
  height: calc(100vh - 72px);
  background: ${themeGet("colors.white")};
  overflow-y: auto;
  z-index: 110;
`;
