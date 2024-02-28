import React from "react";
import { BoxWrapper } from "../Components/Common/Box/Box.style";
import { Typography } from "@mui/material";
import Button from "../Components/Common/Button/Button";

function TableContainer(props) {
  const onClick = () => {};

  return (
    <BoxWrapper
      display="flex"
      width="98%"
      flexDirection="row"
      bgcolor="white"
      marginTop="2%"
      position="absolute"
      height="532px"
      border="1px solid #E0E0E0"
      borderRadius="8px"
      margin="20px 0 0 12px"
    >
      <BoxWrapper
        display="flex"
        height="48px"
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        borderBottom="1px solid #F2F2F2"
      >
        <Typography
          display="inline-block"
          variant="h4"
          width="399px"
          fontFamily="Poppins"
          fontWeight="600"
          fontSize="16px"
          lineHeight="24px"
          color="#1A1A1A"
          padding="10px 10px 10px 15px"
        >
          Trip list
        </Typography>
        <Button
          text="Add Trip"
          onClick={onClick}
          styles={{ width: "96px", bgColor: "#0057D1", margin: "5px" }}
        />
      </BoxWrapper>
    </BoxWrapper>
  );
}

export default TableContainer;
