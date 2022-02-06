import React from "react";
// styled system
import styled from "styled-components";
// types
import { HiddenProps } from "types/components/Hidden";
// ----------------------------------------------

const HiddenWrapper = styled.div<HiddenProps>`
  display: contents;
  ${({ wHide, wShow }) => getResponsive(wHide, wShow)}
`;
// func getter for responsive
const getResponsive = (hidden, show) => {
  const hiddenBreakPoints = hidden.map((item) => {
    return { mode: "hide", breakpoint: item };
  });
  const showBreakPoints = show.map((item) => {
    return { mode: "show", breakpoint: item };
  });
  const responsive = hiddenBreakPoints.concat(showBreakPoints).sort((a, b) => {
    return b.breakpoint - a.breakpoint;
  });
  let resStyle = "";
  if (responsive[0] && responsive[0].mode === "show") {
    resStyle += "display:none;";
  }
  responsive.forEach(({ breakpoint, mode }) => {
    resStyle += `@media screen and (max-width:${breakpoint}px){
    display:${mode === "hide" ? "none" : "contents"};
  }`;
  });
  return resStyle;
};

const Hidden: React.FC<HiddenProps> = ({
  wHide = [],
  wShow = [],
  children,
}) => {
  return (
    <HiddenWrapper wHide={wHide} wShow={wShow} className="hiddenWrapper">
      {children}
    </HiddenWrapper>
  );
};
export default Hidden;
