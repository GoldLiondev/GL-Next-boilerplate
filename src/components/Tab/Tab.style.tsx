// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// types
import { TabTitleProps } from "types/components/Tab";

// ------------------------------------------
const TabTitle = styled.div<TabTitleProps>`
  font-size: 19px;
  font-weight: 500;
  margin-right: 30px;
  font-family: ${themeGet("fonts.changa")};
  padding-bottom: 1px;
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  ::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: ${({ selected }) => (selected ? "2px" : "0")};
    bottom: -2px;
    right: 0;
    background: ${themeGet("colors.primary.regular")};
    background: ${({ sColor }) => themeGet(`colors.${sColor}`)};
  }
`;
const TabContainerWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid ${themeGet("colors.gray.900")};
  margin-bottom: 20px;
`;

export default {
  TabTitle: TabTitle,
  TabContainerWrapper: TabContainerWrapper,
};
