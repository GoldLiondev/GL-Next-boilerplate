import React from "react";
// component
import { WithContainer } from "components/Container";
// styled component
import { CopyrightView } from "views/layout";

// -----------------------------------------------------

const FooterView = () => {
  return (
    <WithContainer
      SectionView={CopyrightView}
      cColor="black.100"
    ></WithContainer>
  );
};

const Footer = React.memo(FooterView);
export default Footer;
