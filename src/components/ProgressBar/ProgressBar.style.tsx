// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// types
import {
  ProgressBarItemProps,
  ProgressBarWrapperProps,
} from "types/components/ProgressBar";
// -------------------------------------------------------
export const ProgressBarWrapper = styled.div<ProgressBarWrapperProps>`
  display: flex;
  height: 8.5px;
  width: 100%;
  background: ${({ bColor }) => themeGet(`colors.${bColor}`)};
`;
export const BarItem = styled.div.attrs(
  ({ progress }: ProgressBarItemProps) => ({
    style: {
      width: progress ? `${progress}%` : "0%",
    },
  })
)<ProgressBarItemProps>`
  background: ${({ iColor }) => themeGet(`colors.${iColor}`)};
  transition: all 500ms ease-in;
`;
