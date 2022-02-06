import React from "react";
// styled component
import styled from "styled-components";
import css from "@styled-system/css";
import { compose, variant, border, space, layout } from "styled-system";

// type
import {
  InputContainerProps,
  InputItemProps,
  StyledProps,
} from "types/components/Input";

type Ref = HTMLInputElement;
// ----------------------------------------------------

const StyledInput = styled.input(
  (props: StyledProps) =>
    css({
      px: "20px",
      py: "20px",
      fontWeight: "regular",
      width: "100%",
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
    textAlign: "left",
    height: "38px",
    textDecoration: "none",
    fontFamily: "fonts.roboto",
    lineHeight: "10px",
    "&:focus": {
      outline: "none",
    },
  },
  variant({
    variants: {
      primary: {
        color: "red.regular",
        bg: "white",
        border: "none",
      },
      red: {
        color: "gray.300",
        bg: "gray.700",
        border: "none",
        "::placeholder": { color: "red.regular" },
      },
      black: {
        bg: "black.150",
        border: "none",
        color: "black.900",
        "::placeholder": { color: "black.900" },
      },
      gray: {
        color: "black.400",
        bg: "whites.100",
        border: "none",
        "::placeholder": { color: "gray.100" },
      },
      gray100: {
        color: "black.400",
        bg: "gray.150",
        border: "none",
        "::placeholder": { color: "gray.100" },
      },
      white: {
        color: "black.400",
        bg: "white",
        border: "none",
        "::placeholder": { color: "black.400" },
      },
      outlinedGray: {
        color: "black.400",
        bg: "white",
        border: "1px solid",
        borderColor: "gray.600",
        "::placeholder": { color: "black.400" },
      },
      outlinedRed: {
        color: "black.400",
        bg: "white",
        border: "1px solid",
        borderColor: "red.regular",
        "::placeholder": { color: "black.400" },
      },
    },
  }),
  variant({
    prop: "isize",
    variants: {
      big: {
        height: "58px",
        px: 21,
        py: 21,
      },
      medium: { height: "44px", px: 16, py: 10 },
      small: { height: "35px", px: 16, py: 10 },
      auto: { height: "100%", px: 16 },
    },
  }),
  variant({
    prop: "ifont",
    variants: {
      medium: { fontSize: 15, fontWeight: 900 },
      normal: { fontSize: 16, fontWeight: 400 },
      smbold: { fontSize: 12, fontWeight: 900 },
      sm: { fontSize: 12, fontWeight: 400 },
    },
  }),
  compose(border, space, layout)
);
// eslint-disable-next-line react/display-name
const Input = React.forwardRef<Ref, InputItemProps>(
  (
    { children, disabled, icon, placeholder = "", loading = false, ...props },
    ref
  ) => {
    return (
      <StyledInput
        ref={ref}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
    );
  }
);
// eslint-disable-next-line react/display-name
const InputContainer = React.forwardRef<Ref, InputContainerProps>(
  (
    { iColor = "primary", iSize = "medium", iFont = "medium", ...props },
    ref
  ) => (
    <Input
      ref={ref}
      variant={iColor}
      isize={iSize}
      ifont={iFont}
      {...props}
    ></Input>
  )
);

export default InputContainer;
