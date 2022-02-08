import React from "react";
import setLanguage from "next-translate/setLanguage";
//component
import { Row } from "components/Layout";
import { Text } from "components/Text";
import { Hidden } from "components/Hidden";
// ---------------------------------------------------
export default function index() {
  return (
    <>
      <Hidden wShow={[380]}>
        <Row
          alignItems="center"
          justifyContent="center"
          gap={20}
          padding="0 0 10px 0 "
        >
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
      <Text fColor="white" padding="30px 0" tAlign="center">
        ©All rights reserved Gold Lion 2022.
      </Text>
    </>
  );
}
