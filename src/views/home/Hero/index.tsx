import React from "react";
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
          <Image src={NotFoundImage} width={859} height={228} />
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
            Welcome to{" "}
            <Text
              mode="span"
              fColor="blue.light"
              fWeight={800}
              fSize={62}
              responsive={{
                768: {
                  fSize: 30,
                },
              }}
            >
              Next.js
            </Text>{" "}
            Boilerplate!
          </Text>
        </Col>
        <Col>
          <Text fColor="white" tAlign="center">
            <Text
              mode="span"
              tDecorations="underline"
              cursor="pointer"
              fColor="blue.light"
              hoverStyle={{ fColor: "white" }}
              onClick={() => {
                move("https://github.com/GoldLiondev/GL-Next-boilerplate");
              }}
            >
              {" "}
              Get started
            </Text>{" "}
            with this for your project.
          </Text>
        </Col>
      </Row>
    </HeroWrapper>
  );
}
