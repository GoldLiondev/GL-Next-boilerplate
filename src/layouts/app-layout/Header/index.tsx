import React, { useState } from "react";
// module
import setLanguage from "next-translate/setLanguage";
// assets
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
// component
import { Row, Col } from "components/Layout";
import { Hidden } from "components/Hidden";
import { Text } from "components/Text";
// hooks
import useDarkMode from "use-dark-mode";
// styled component
import { HeaderWrapper, IconWrapper } from "./Header.style";

// --------------------------------------------------------------

const Header = () => {
  const darkMode = useDarkMode();
  const handleChangeMode = () => {
    darkMode.toggle();
  };
  return (
    <HeaderWrapper>
      <Row
        justifyContent="flex-end"
        gap={20}
        padding="15px 20px"
        responsive={{ 380: { gap: -1 } }}
      >
        <Col>
          {darkMode.value ? (
            <IconWrapper onClick={handleChangeMode}>
              <BsMoonStarsFill color="#fceb00" size={30} />
            </IconWrapper>
          ) : (
            <IconWrapper onClick={handleChangeMode}>
              <BsSunFill color="#fceb00" size={30} />
            </IconWrapper>
          )}
        </Col>
        <Col>
          <Hidden wHide={[380]}>
            <Row alignItems="center" gap={20}>
              <Text
                fColor="white"
                cursor="pointer"
                onClick={() => {
                  setLanguage("en");
                }}
              >
                English
              </Text>
              <Text
                fColor="white"
                cursor="pointer"
                onClick={() => {
                  setLanguage("jp");
                }}
              >
                Japanese
              </Text>
              <Text
                fColor="white"
                cursor="pointer"
                onClick={() => {
                  setLanguage("es");
                }}
              >
                Spanish
              </Text>
              <Text
                fColor="white"
                cursor="pointer"
                onClick={() => {
                  setLanguage("cn");
                }}
              >
                Chinese
              </Text>
            </Row>
          </Hidden>
        </Col>
      </Row>
    </HeaderWrapper>
  );
};
export default Header;
