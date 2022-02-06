// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ------------------------------------------------

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${themeGet("colors.white")};
  :hover {
    text-decoration: underline;
  }
  text-transform: capitalize;
`;
