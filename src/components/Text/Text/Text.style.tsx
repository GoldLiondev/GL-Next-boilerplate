// styled system
import styled, { css } from "styled-components";
// types
import { ResponsivedTextProps } from "types/components/Text";
import { themeGet } from "@styled-system/theme-get";

// -------------------------------------------------------
export const TextWrapper = styled.p<ResponsivedTextProps>`
  ${(props) => getStyle(props)}
`;
export const TextSpanWrapper = styled.span<ResponsivedTextProps>`
  ${(props) => getStyle(props)}
`;
export const TextH1Wrapper = styled.h1<ResponsivedTextProps>`
  ${(props) => getStyle(props)}
`;
export const TextH2Wrapper = styled.h2<ResponsivedTextProps>`
  ${(props) => getStyle(props)}
`;
export const TextH3Wrapper = styled.h3<ResponsivedTextProps>`
  ${(props) => getStyle(props)}
`;
export const TextH4Wrapper = styled.h4<ResponsivedTextProps>`
  ${(props) => getStyle(props)}
`;
export const TextH5Wrapper = styled.h5<ResponsivedTextProps>`
  ${(props) => getStyle(props)}
`;

// func getter for responsive
const getResponsive = (responsive) => {
  let resStyle = "";
  const resData = Object.keys(responsive).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );
  resData.forEach((itemSize) => {
    const item = responsive[itemSize];
    resStyle += `@media screen and (max-width:${itemSize}px){
      ${item.fSize ? `font-size: ${item.fSize}px;` : ""}
      ${item.fWeight ? `font-weight: ${item.fWeight};` : ""}
      ${item.tAlign ? `text-align: ${item.tAlign};` : ""}
      ${item.lHeight ? `line-height: ${item.lHeight}px;` : ""}
      ${item.tTransForm ? ` text-transform: ${item.tTransForm};` : ""}
      ${item.padding ? `padding: ${item.padding};` : ""}
      ${item.margin ? `margin: ${item.margin};` : ""}
      ${item.tSpacing ? `letter-spacing: ${item.tSpacing}px;` : ""}
      ${item.mWidth ? `max-width: ${item.mWidth}px;` : ""}
      ${item.tDecorations ? `text-decoration: ${item.tDecorations};` : ""}
    }`;
  });
  return resStyle;
};
// func getter for style
const getStyle = (item: ResponsivedTextProps) => {
  return css`
    ${item.fSize ? `font-size: ${item.fSize}px` : ""};
    ${item.fWeight ? `font-weight: ${item.fWeight}` : ""};
    ${item.fStyle ? `font-style: ${item.fStyle}` : ""};
    ${item.tAlign ? `text-align: ${item.tAlign}` : ""};
    ${item.padding ? `padding: ${item.padding}` : ""};
    ${item.margin ? `margin: ${item.margin}` : ""};
    ${item.tTransForm ? ` text-transform: ${item.tTransForm}` : ""};
    ${item.lHeight ? `line-height: ${item.lHeight}px` : ""};
    ${item.tSpacing ? `letter-spacing: ${item.tSpacing}px` : ""};
    ${item.mWidth ? `max-width: ${item.mWidth}px` : ""};
    ${item.cursor ? `cursor: ${item.cursor}` : ""};
    color: ${themeGet(`colors.${item.fColor}`)};
    font-family: ${themeGet(`fonts.${item.tFont}`)};
    ${item.tDecorations ? `text-decoration: ${item.tDecorations}` : ""};
    ${item.responsive && getResponsive(item.responsive)}
    &:hover {
      color: ${themeGet(`colors.${item.hoverStyle?.fColor}`)};
    }
  `;
};
