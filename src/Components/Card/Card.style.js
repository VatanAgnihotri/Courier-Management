import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  styled,
  Paper,
} from "@mui/material";

export const CardWrapper = styled(Card)`
  display: ${(props) => props.display ?? "inherit"};
  width: ${(props) => props.width ?? "inherit"};
  border: 1px solid #e0e0e0;
  margin: 10px;
  justify-content: ${(props) => props.justifyContent ?? "default"};
  height: ${(props) => props.height ?? "100px"};
  padding: ${(props) => props.padding ?? "12px 24px 12px 24px"};
  border-radius: 8px;
  & .css-1lt5qva-MuiCardContent-root:last-child {
    padding: 0;
  }
`;

export const CardContentContainer = styled(CardContent)`
  padding: 5px 16px 5px 16px;
  width: ${(props) => props.width ?? "default"};
  border-right: ${(props) => props.border ?? "default"};
  border-right: ${(props) => props.borderRight ?? "default"};
  justify-content: ${(props) => props.justifyContent ?? "default"};
  background-color: ${(props) => props.backgroundColor ?? "default"};
`;
export const CardTypographyContainer = styled(Typography)``;

export const CardProgressBar = styled(CircularProgress)`
  size: lg;
  margin: 20px 0 0 20px;
`;

export const DividerDiv = styled("div")`
    border-left: 1px solid #D3D3D3;
    height:70%;
    margin-top:12px
  }`;

export const Span = styled("span")`
  font-family: ${(props) => props.fontFamily ?? "Poppins"};
  font-size: ${(props) => props.fontSize ?? "14px"};
  font-weight: ${(props) => props.fontWeight ?? "bold"};
  line-height: ${(props) => props.lineHeight ?? "20px"};
  letter-spacing: 0px;
  text-align: center;
  color: #0057d1;
  background-color: ${(props) => props.backgroundColor ?? "inherit"};
  width: ${(props) => props.width ?? "default"};
  height: ${(props) => props.height ?? "default"};
  display: ${(props) => props.display ?? "default"};
  padding: ${(props) => props.padding ?? "default"};
  border-radius: ${(props) => props.borderRadius ?? "default"};
  gap: ${(props) => props.gap ?? "default"};
  position: ${(props) => props.position ?? "default"};
  left: ${(props) => props.left ?? "default"};
  bottom: ${(props) => props.bottom ?? "default"};
`;

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
