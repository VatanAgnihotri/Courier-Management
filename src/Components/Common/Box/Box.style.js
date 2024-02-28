import { Box, styled } from "@mui/material";

export const BoxWrapper = styled(Box)`
  top: ${(props) => props.top ?? "inherit"};
  left: ${(props) => props.left ?? "inherit"};
  bottom: ${(props) => props.bottom ?? "inherit"};
  right: ${(props) => props.right ?? "inherit"};
  position: ${(props) => props.position ?? "inherit"};
  align-items: ${(props) => props.alignItems ?? "inherit"};
  justify-content: ${(props) => props.justifyContent ?? "inherit"};
  width: ${(props) => props.width ?? "inherit"};
  display: ${(props) => props.display ?? "inherit"};
  flex-direction: ${(props) => props.flexDirection ?? "inherit"};
  background-color: ${(props) => props.bgcolor ?? "inherit"};
`;
