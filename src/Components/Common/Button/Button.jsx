import React from "react";
import { PrimaryButton } from "./Button.style";

function Button(props) {
  return (
    <>
      <PrimaryButton
        disabled={props.disabled}
        variant={props.variant}
        onClick={() => props.onClick()}
        {...props.styles}
      >
        {props.text}
      </PrimaryButton>
    </>
  );
}

export default Button;
