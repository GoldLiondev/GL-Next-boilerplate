import React from "react";
// types
import { ProgressBarProps } from "types/components/ProgressBar";
// styled component
import { ProgressBarWrapper, BarItem } from "./ProgressBar.style";
// ---------------------------------------------------------------

const ProgressBar: React.FC<ProgressBarProps> = ({
  total = 100,
  bColor = "black.300",
  iColor = "primary.regular",
  current = 0,
}) => {
  return (
    <ProgressBarWrapper bColor={bColor}>
      <BarItem progress={(current / total) * 100} iColor={iColor}></BarItem>
    </ProgressBarWrapper>
  );
};
export default ProgressBar;
