import React, { useState } from "react";
// module
import setLanguage from "next-translate/setLanguage";
// assets
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
// component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
// hooks
import useDarkMode from "use-dark-mode";
// styled component
import { HeaderWrapper, IconWrapper } from "./Header.style";

// --------------------------------------------------------------

const Header = () => {
  const [mode, setMode] = useState(false);
  const darkMode = useDarkMode();

  const handleChangeMode = () => {
    setMode(!mode);
    darkMode.toggle();
  };

  return (
    <HeaderWrapper>
      <Row justifyContent="flex-end" gap={20} padding="15px 20px">
        <Col>
          {mode ? (
            <IconWrapper onClick={handleChangeMode}>
              <BsSunFill color="#fceb00" size={30} />
            </IconWrapper>
          ) : (
            <IconWrapper onClick={handleChangeMode}>
              <BsMoonStarsFill color="#fceb00" size={30} />
            </IconWrapper>
          )}
        </Col>
        <Col>
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
        </Col>
      </Row>
    </HeaderWrapper>
  );
};
export default Header;
