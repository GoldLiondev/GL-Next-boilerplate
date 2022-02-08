import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// -----------------------------------------------------------

export const HeaderWrapper = styled.div`
  position: fixed;
  color: ${themeGet("colors.white")};
  width: 100%;
  z-index: 10;
`;
export const IconWrapper = styled.div`
  font-size: 0;
  padding: 5px;
  cursor: pointer;
`;
