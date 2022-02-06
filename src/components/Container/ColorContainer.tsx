// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// types
import { ColorContainerProps } from "types/components/Container";
// ------------------------------------------------------------

const ColorContainer = styled.div<ColorContainerProps>`
  background: ${({ cColor }) => themeGet(`colors.${cColor}`, "white")};
`;
export default ColorContainer;
