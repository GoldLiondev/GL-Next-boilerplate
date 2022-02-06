import React from "react";
// styled component
import ContainerContent from "./ContainerContent";
import ContainerWrapper from "./ContainerWrapper";
// type
type Props = {
  children: React.ReactNode;
};
// ----------------------------------------------------------

const Container: React.FC<Props> = ({ children }) => {
  return (
    <ContainerWrapper>
      <ContainerContent>{children}</ContainerContent>
    </ContainerWrapper>
  );
};

export default Container;
