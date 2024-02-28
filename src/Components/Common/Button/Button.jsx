import React from "react";
import { PrimaryButton } from "./Button.style";

function Button(props) {
  return (
    <>
      <PrimaryButton variant="contained" onClick={() => props.onClick()} {...props.styles}>
        {props.text}
      </PrimaryButton>
    </>
  );
}

export default Button;
