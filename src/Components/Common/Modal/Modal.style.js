import { Modal, styled } from "@mui/material";

export const ModalWrapper = styled(Modal)`
  top: ${(props) => props.top ?? "default"};
  left: ${(props) => props.left ?? "default"};
  bottom: ${(props) => props.bottom ?? "default"};
  right: ${(props) => props.right ?? "default"};
  position: ${(props) => props.position ?? "default"};
  align-items: ${(props) => props.alignItems ?? "default"};
  justify-content: ${(props) => props.justifyContent ?? "default"};
  width: ${(props) => props.width ?? "default"};
  display: ${(props) => props.display ?? "default"};
  flex-direction: ${(props) => props.flexDirection ?? "default"};
  background-color: ${(props) => props.bgColor ?? "default"};
`;
