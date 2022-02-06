import React from "react";
// component
import { Row } from "components/Layout";
import { useLinkItem } from "components/hoc";
// types
import { BreadcrumbsProps } from "types/components/Breadcrumbs";
// styeld component
import { LinkWrapper } from "./Breadcrumbs.style";
// ---------------------------------------------
const MenuItem = useLinkItem(LinkWrapper);
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  separator = "/",
  items,
}) => {
  return (
    <Row gap={10} rWidth={"fit-content"}>
      {items.map((item, index) => {
        if (index === items.length - 1) {
          return (
            <Row key={`breadcurmbs_${index}`} rWidth={"fit-content"}>
              <MenuItem href={item.link} title={item.title}></MenuItem>
            </Row>
          );
        }
        return (
          <Row key={`breadcurmbs_${index}`} gap={10} rWidth={"fit-content"}>
            <MenuItem href={item.link} title={item.title}></MenuItem>
            <LinkWrapper>{separator}</LinkWrapper>
          </Row>
        );
      })}
    </Row>
  );
};
export default Breadcrumbs;
