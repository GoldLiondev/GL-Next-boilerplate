// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// type
import { SideBarStyledProps } from "types/components/SideBar";

// --------------------------------------------------------

export const LayoutWrapper = styled.div<SideBarStyledProps>`
  position: relative;
  left: ${({ opened }) => (opened ? 250 : 0)}px;
  transition: left 0.3s;
`;
export const SideBarWrapper = styled.div<SideBarStyledProps>`
  display: block !important;
  position: fixed;
  top: 0;
  left: ${({ opened }) => (opened ? 0 : -255)}px;
  width: 250px;
  height: 100vh;
  transition: all 0.3s;
  background: ${themeGet("colors.white")};
  box-shadow: 0 0 5px 0 rgb(50 50 50 / 75%);
  overflow-y: auto;
  z-index: 101;
`;
export const OverLayer = styled.div<SideBarStyledProps>`
  transition: all 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: ${({ opened }) => (opened ? 0.15 : 0)};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  z-index: 100;
`;
