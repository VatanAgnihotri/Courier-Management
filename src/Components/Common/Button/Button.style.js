import { Button, styled } from "@mui/material";

export const PrimaryButton = styled(Button)`
  text-transform: none;
  color: ${(props) => props.color ?? "#FFFFFF"};
  background-color: ${(props) => props.bgColor ?? "default"};
  width: ${(props) => props.width ?? "default"};
  height: ${(props) => props.height ?? "default"};
  padding: ${(props) => props.padding ?? "default"};
  margin: ${(props) => props.margin ?? "default"};
`;
