import React from "react";
// modules
import Trans from "next-translate/Trans";
// component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
import { Image } from "components/Image";
// hooks
import useDarkMode from "use-dark-mode";
import { useRouter } from "hooks";
// styled components
import { HeroWrapper } from "./Hero.style";
// assets
import LogoDarkImage from "assets/images/layout/boilerplate_logo_dark.png";
import LogoLightImage from "assets/images/layout/boilerplate_logo_light.png";
// ----------------------------------------------------------

export default function index() {
  const { move } = useRouter();
  const darkMode = useDarkMode();

  return (
    <HeroWrapper>
      <Row
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className="heroLayout"
        padding="80px 0"
      >
        <Col padding="0 0 20px 0">
          <Image
            src={darkMode.value ? LogoLightImage : LogoDarkImage}
            width={859}
            height={228}
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
                  fColor="primary.regular"
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
                  fWeight={500}
                  fColor="primary.regular"
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
