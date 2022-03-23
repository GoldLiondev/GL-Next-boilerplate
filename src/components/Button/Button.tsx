import React, { Fragment } from "react";
// styled component
import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import css from "@styled-system/css";
import { compose, variant, border, space, layout } from "styled-system";

// type
import {
  ButtonContainerProps,
  ButtonItemProps,
  StyledProps,
} from "types/components/Button";

type Ref = HTMLButtonElement;
// ----------------------------------------------------

const StyledButton = styled.button(
  (props: StyledProps) =>
    css({
      px: "20px",
      py: "20px",
      fontSize: "14px",
      fontWeight: "semiBold",
      cursor: props.disabled ? "not-allowed" : "pointer",
      transition:
        "all 0.3s ease, color 300ms ease-in-out, background-color 300ms ease-in-out",
    }),
  {
    zIndex: 15,
    appearance: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    textAlign: "center",
    height: "38px",
    textDecoration: "none",
    fontFamily: "inherit",
    borderRadius: "5px",

    "&:focus": {
      outline: "none",
    },
    "&:active": {
      transform: "scale(0.99)",
    },
  },
  variant({
    variants: {
      primary: {
        color: "white",
        bg: "primary.regular",
        border: "none",

        "&:hover": { bg: "primary.dark" },
      },
      success: {
        color: "white",
        bg: "green.regular",
        border: "none",
        "&:active": { bg: "green.dark" },
      },
      outlinedRed: {
        color: "white",
        border: `2px solid white`,
        borderRadius: "0",
        bg: "red.regular",
        "&:hover": { bg: "white", color: "red.regular" },
      },
    },
  }),
  variant({
    prop: "size",
    variants: {
      big: {
        height: "58px",
        fontSize: 16,
        px: 21,
        py: 21,
      },
      normal: { borderRadius: 0, height: "42px", width: "150px", fontSize: 12 },
      normalfM: {
        borderRadius: 0,
        height: "42px",
        width: "150px",
        fontSize: 14,
      },
      medium: { height: "42px", fontSize: 16, px: 10, py: 10 },
      small: { height: "38px", fontSize: 16, px: 25, py: 10 },
    },
  }),
  compose(border, space, layout)
);
const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  border: 3px solid #ffffff;
  border-top: 3px solid ${themeGet("primary.regular", "#009E7F")};
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 3px;
  }
`;
// eslint-disable-next-line react/display-name
const Button = React.forwardRef<Ref, ButtonItemProps>(
  ({ children, disabled, icon, loading = false, ...props }, ref) => {
    const buttonIcon = icon || Fragment;
    return (
      <StyledButton
        ref={ref}
        {...props}
        disabled={disabled}
        aria-label="gl-next"
      >
        <ButtonInner>
          <div>{children}</div>
          {loading && <Spinner />}
          {!loading && buttonIcon}
        </ButtonInner>
      </StyledButton>
    );
  }
);

// eslint-disable-next-line react/display-name
const ButtonContainer = React.forwardRef<Ref, ButtonContainerProps>(
  ({ children, bColor = "primary", bSize = "medium", ...props }, ref) => (
    <Button ref={ref} variant={bColor} size={bSize} {...props}>
      {children}
    </Button>
  )
);

export default ButtonContainer;
