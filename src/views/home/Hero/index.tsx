import React from "react";
// modules
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import Trans from "next-translate/Trans";

// component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
import { Image } from "components/Image";
// hooks
import { useRouter } from "hooks";
// styled components
import { HeroWrapper } from "./Hero.style";
// assets
import NotFoundImage from "assets/images/layout/boilerplate_logo.png";
// ----------------------------------------------------------

export default function index() {
  const { t } = useTranslation("home");
  const { move } = useRouter();
  return (
    <HeroWrapper>
      <Row
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className="heroLayout"
      >
        <Col padding="0 0 20px 0">
          <Image
            src={NotFoundImage}
            width={859}
            height={228}
            onClick={() => {
              setLanguage("cn");
            }}
          />
        </Col>
        <Col>
          <Text
            mode="h1"
            fColor="white"
            padding="20px 0"
            tAlign="center"
            responsive={{
              768: {
                fSize: 30,
              },
            }}
          >
            <Trans
              i18nKey="home:title"
              components={[
                <Text
                  key="title"
                  mode="span"
                  fColor="blue.light"
                  fWeight={800}
                  fSize={62}
                  responsive={{
                    768: {
                      fSize: 30,
                    },
                  }}
                />,
              ]}
            />
          </Text>
        </Col>
        <Col>
          <Text fColor="white" tAlign="center" fSize={16}>
            <Trans
              i18nKey="home:cta-desc"
              components={[
                <Text
                  key="started"
                  mode="span"
                  tDecorations="underline"
                  cursor="pointer"
                  fColor="blue.light"
                  hoverStyle={{ fColor: "white" }}
                  onClick={() => {
                    move("https://github.com/GoldLiondev/GL-Next-boilerplate");
                  }}
                />,
              ]}
            />
          </Text>
        </Col>
      </Row>
    </HeroWrapper>
  );
}
