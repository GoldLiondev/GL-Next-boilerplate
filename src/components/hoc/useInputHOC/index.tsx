import React, { ComponentType } from "react";
// component
import { Row, Col } from "components/Layout";
import { Input } from "components/Input";
// type
import { InputHocProps } from "types/components/Input";
// styled system

// -----------------------------------------------------------------

const useInputHoc = (IconWrapper: ComponentType) => {
  // eslint-disable-next-line react/display-name
  return ({ inputIcon, ...props }: InputHocProps) => {
    return (
      <Row>
        <Col flex="1">
          <Input {...props} />
        </Col>
        <Col>
          <IconWrapper>{inputIcon}</IconWrapper>
        </Col>
      </Row>
    );
  };
};

export default useInputHoc;
