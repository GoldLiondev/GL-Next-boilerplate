import React from "react";
// component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { useLinkItem } from "components/hoc";
// styled components
import { NotFoundViewWrapper, LinkItemWrapper } from "./NotFound.style";
// assets
import NotFoundImage from "assets/images/layout/404.png";
// ----------------------------------------------------------

const LinkItem = useLinkItem(LinkItemWrapper);

export default function index() {
  return (
    <NotFoundViewWrapper>
      <Row justifyContent="center" gap={10}>
        <Col className="notfound_img">
          <Image src={NotFoundImage} width={140} height={140}></Image>
        </Col>
        <Col>
          <Text
            fSize={65}
            fWeight={700}
            padding="0 0 10px 0"
            fColor="black.normal"
            tTransForm="uppercase"
            mode="h1"
          >
            404
          </Text>
          <Text mode="h2" tTransForm="uppercase" fSize={21}>
            Oops! Page Not Be Found
          </Text>
          <Text mWidth={500} padding="0 0 10px 0">
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
          </Text>
          <LinkItem href="/" title="Back to homepage"></LinkItem>
        </Col>
      </Row>
    </NotFoundViewWrapper>
  );
}
