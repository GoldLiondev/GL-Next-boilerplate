import React from "react";
// type
import { ResponsivedTextProps } from "types/components/Text";
// styled component
import {
  TextWrapper,
  TextSpanWrapper,
  TextH1Wrapper,
  TextH2Wrapper,
  TextH3Wrapper,
  TextH4Wrapper,
  TextH5Wrapper,
} from "./Text.style";
// ------------------------------------------------------
const wrapperList = {
  p: TextWrapper,
  span: TextSpanWrapper,
  h1: TextH1Wrapper,
  h2: TextH2Wrapper,
  h3: TextH3Wrapper,
  h4: TextH4Wrapper,
  h5: TextH5Wrapper,
};

const Text: React.FC<ResponsivedTextProps> = ({
  mode = "p",
  children,
  ...props
}) => {
  const Wrapper = wrapperList[mode];
  return <Wrapper {...props}>{children}</Wrapper>;
};
export default Text;
