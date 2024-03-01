import { Button, styled } from "@mui/material";

export const PrimaryButton = styled(Button)`
  text-transform: none;

  background-color: ${(props) => props.bgColor ?? "default"};
  width: ${(props) => props.width ?? "default"};
  height: ${(props) => props.height ?? "default"};
  padding: ${(props) => props.padding ?? "default"};
  margin: ${(props) => props.margin ?? "default"};

  &.Mui-disabled {
    color: #ffffff;
    background-color: #c7c7c7;
  }
`;
