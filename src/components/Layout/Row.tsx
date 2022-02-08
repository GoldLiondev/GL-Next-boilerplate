import React from "react";
// styled system
import styled from "styled-components";
// type
import { ResponsivedLayoutRowProps } from "types/components/Layout";
// utils
import { isEmpty } from "utils/helper-validation";
// ----------------------------------------------------------

// ********** flex-box 24 items ********** //

const RowWrapper = styled.div<ResponsivedLayoutRowProps>`
  font-size: inherit;
  font-weight: inherit;
  display: ${({ display }) => display};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding || "0"};
  width: ${({ rWidth }) =>
    rWidth ? (typeof rWidth === "number" ? rWidth + "px" : rWidth) : "100%"};
  height: ${({ rHeight }) =>
    rHeight
      ? typeof rHeight === "number"
        ? rHeight + "px"
        : rHeight
      : "100%"};
  grid-template-columns: ${({ templateCol }) => templateCol || "0"};
  grid-template-rows: ${({ templateRow }) => templateRow || "0"};
  max-width: ${({ mWidth }) => (mWidth ? `${mWidth}px` : "none")};
  ${({ zIndex }) => (zIndex ? `z-index: ${zIndex}` : "")};
  position: relative;
  ${({ flexDirection, gap, display }) => {
    return getGap(flexDirection, gap, display);
  }}
  ${({ responsive, flexDirection, display, gap }) =>
    responsive && getResponsive(responsive, flexDirection, display, gap)}
`;
// func getter for responsive
const getResponsive = (responsive, flexDirection, display, gap) => {
  let resStyle = "";
  const resData = Object.keys(responsive).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );
  let lastDirection = flexDirection;
  let lastDisplay = display;
  let lastGap = gap;
  resData.forEach((itemSize) => {
    const item = responsive[itemSize];
    if (!isEmpty(item.flexDirection)) {
      lastDirection = item.flexDirection;
    }
    if (!isEmpty(item.display)) {
      lastDisplay = item.display;
    }
    if (!isEmpty(item.gap)) {
      lastGap = item.gap;
    }
    resStyle += `@media screen and (max-width:${itemSize}px){
      ${item.display ? `display: ${item.display};` : `display:${lastDisplay};`}
      ${item.flexWrap ? `flex-wrap: ${item.flexWrap};` : ""}
      ${
        item.flexDirection
          ? `flex-direction: ${item.flexDirection};`
          : `flex-direction:${lastDirection};`
      }
      ${item.justifyContent ? `justify-content: ${item.justifyContent};` : ""}
      ${item.alignItems ? `align-items: ${item.alignItems};` : ""}
      ${item.padding ? `padding: ${item.padding};` : ""}
      ${item.templateCol ? `grid-template-columns: ${item.templateCol};` : ""}
      ${item.templateRow ? `grid-template-rows: ${item.templateRow};` : ""}
      ${item.zIndex ? `z-index: ${item.zIndex};` : ""}
      ${item.mWidth ? `max-width: ${item.mWidth}px;` : ""}
      ${
        item.rWidth
          ? `width: ${
              typeof item.rWidth === "number" ? item.rWidth + "px" : item.rWidth
            };`
          : ""
      }
      ${
        item.rHeight
          ? `width: ${
              typeof item.rHeight === "number"
                ? item.rHeight + "px"
                : item.rHeight
            };`
          : ""
      }
      ${
        item.gap
          ? `
          & > *:not(:last-child) {
            margin-right: 0px;
            margin-bottom: 0px;
          }
          & > *:not(:first-child) {
            margin-right: 0px;
            margin-bottom: 0px;
          }
          `
          : ""
      }
      ${
        item.gap === 0
          ? "gap:0px;"
          : getGap(lastDirection, lastGap, lastDisplay)
      }
    }`;
  });
  return resStyle;
};

// func getter for gap
const getGap = (flexDirection, gap, display) => {
  if (display === "grid") {
    return typeof gap === "string"
      ? `
    gap: ${gap};
   `
      : `
     gap: ${gap}px;
    `;
  } else if (flexDirection === "column") {
    return `
      height: 100%;
      & > *:not(:last-child) {
         margin-right: 0px;
         margin-bottom: ${gap}px;
      }
    `;
  } else if (flexDirection === "column-reverse") {
    return `
      height: 100%;
      & > *:not(:first-child) {
         margin-right: 0px;
         margin-bottom: ${gap}px;
      }
    `;
  } else if (flexDirection === "row") {
    return `
      & > *:not(:last-child) {
         margin-bottom: 0px;
         margin-right: ${gap}px;
      }
    `;
  } else if (flexDirection === "row-reverse") {
    return `
      & > *:not(:first-child) {
         margin-bottom: 0px;
         margin-right: ${gap}px;
      }
    `;
  }
};

const Row = ({
  children,
  padding,
  flexDirection = "row",
  alignItems = "initial",
  justifyContent = "initial",
  gap = 0,
  flexWrap = "nowrap",
  display = "flex",
  templateCol = "auto",
  templateRow = "auto",
  zIndex,
  responsive,
  className,
  mWidth,
  rWidth,
  rHeight,
}: ResponsivedLayoutRowProps) => {
  return (
    <RowWrapper
      display={display}
      padding={padding}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      flexWrap={flexWrap}
      templateCol={templateCol}
      templateRow={templateRow}
      zIndex={zIndex}
      responsive={responsive}
      mWidth={mWidth}
      className={className}
      rWidth={rWidth}
      rHeight={rHeight}
    >
      {children}
    </RowWrapper>
  );
};
export default Row;
