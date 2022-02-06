import React from "react";
// component
import {
  Container,
  ColorContainer,
  ContainerWrapper,
} from "components/Container";

// types
import { WithContainerProps } from "types/components/Container";

// -------------------------------------------------------------
const WithContainer = ({
  cColor,
  SectionView,
  mWidth,
  mode = "colorContainer",
  className = "",
  ...props
}: WithContainerProps) => {
  if (mode === "colorContainer") {
    return (
      <ColorContainer cColor={cColor} className={className}>
        <Container>
          <SectionView {...props} />
        </Container>
      </ColorContainer>
    );
  }
  if (mode === "container") {
    return (
      <Container>
        <SectionView {...props} />
      </Container>
    );
  }
  if (mode === "wrapper") {
    return (
      <ColorContainer cColor={cColor} className={className}>
        <ContainerWrapper mWidth={mWidth}>
          <SectionView {...props} />
        </ContainerWrapper>
      </ColorContainer>
    );
  }
  if (mode === "colorWrapper") {
    return (
      <ColorContainer cColor={cColor} className={className}>
        <SectionView {...props} />
      </ColorContainer>
    );
  }
  if (mode === "none") {
    return <SectionView {...props} />;
  }
  return <></>;
};

export default WithContainer;
