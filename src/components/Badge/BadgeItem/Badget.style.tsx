// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// types
import { BadgeContainerProps } from "types/components/Badge";
// ----------------------------------------------------

export const BadgeWrapper = styled.div<BadgeContainerProps>`
  border-radius: 4px;
  cursor: pointer;
  background: ${({ badgeBg }) => themeGet(`colors.${badgeBg}`)};
  color: ${({ badgeColor }) => themeGet(`colors.${badgeColor}`)};
  font-size: 10px;
  padding: 7px 10px;
  text-transform: uppercase;
  width: fit-content;
`;
