import React, { useCallback, useEffect, useState } from "react";
import { BoxWrapper } from "../Components/Common/Box/Box.style";
import { Typography } from "@mui/material";
import Button from "../Components/Common/Button/Button";
import DataTable from "../Components/Table/Table";
import { data } from "../constants/data";

function TableContainer(props) {
  const [tableData, setTableData] = useState([]);

  const getTatValue = useCallback((trip) => {
    if (trip.etaDays <= 0) {
      return "Others";
    } else if (trip.tripEndTime.trim() || trip.lastPingTime.trim()) {
      const date1 = new Date(trip.tripEndTime || trip.lastPingTime);
      const date2 = new Date(trip.tripStartTime);
      const date1Ms = date1.getTime();
      const date2Ms = date2.getTime();
      const differenceMs = date1Ms - date2Ms;
      const differenceDays = Math.abs(differenceMs / (1000 * 60 * 60 * 24));
      if (differenceDays >= trip.etaDays) {
        return "On time";
      } else {
        return "Delayed";
      }
    }
  }, []);

  useEffect(() => {
    setTableData((prev) => {
      return data.map((trip, index) => {
        let tat = getTatValue(trip);

        return { ...trip, id: trip._id, tat };
      });
    });
  }, [setTableData, getTatValue]);

  const onClick = () => {};

  const onCellClick = (e) => {
    console.log("event", e);
  };

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
      <BoxWrapper position="relative" top="50px" width="100%">
        <DataTable data={tableData} onCellClick={onCellClick} />
      </BoxWrapper>
    </BoxWrapper>
  );
}

export default TableContainer;
