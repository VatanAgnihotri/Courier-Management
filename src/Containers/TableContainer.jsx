import React, { useCallback, useEffect, useState } from "react";
import { BoxWrapper } from "../Components/Common/Box/Box.style";
import { Typography } from "@mui/material";
import Button from "../Components/Common/Button/Button";
import DataTable from "../Components/Table/Table";
import { data } from "../constants/data";
import UpdateForm from "../Components/UpdateForm/UpdateForm";

function TableContainer(props) {
  const [tableData, setTableData] = useState([]);
  const [showUpdateButton, setShowUpdateButton] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showUpdateModal, setUpdateModal] = useState(false);
  const [allStatus, setAllStatus] = useState([]);

  const { setCounterData } = props;

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

  useEffect(() => {
    const counterData = {
      totalTrips: { count: data.length },
      delivered: { count: 0, percentage: 0, onTime: 0 },
      delayed: { count: 0 },
      inTransit: { count: 0, percentage: 0 },
    };

    tableData.forEach((trip, index) => {
      if (trip.currentStatusCode === "DEL") {
        counterData.delivered.count++;
        trip.tat === "On time" && counterData.delivered.onTime++;
      } else if (trip.currentStatusCode === "INT") {
        counterData.inTransit.count++;
      }
      if (trip.tat === "Delayed") {
        counterData.delayed.count++;
      }
    });
    counterData.delivered.percentage = parseInt(
      (counterData.delivered.count / counterData.totalTrips.count) * 100
    );
    counterData.inTransit.percentage = parseInt(
      (counterData.inTransit.count / counterData.totalTrips.count) * 100
    );

    setCounterData(counterData);
  }, [setCounterData, tableData]);

  useEffect(() => {
    if (selectedRows.length === 1) setShowUpdateButton(true);
    else setShowUpdateButton(false);
  }, [selectedRows, setShowUpdateButton]);

  const updateTableData = (data) => {
    console.log("Data :: ::", data);
    // setTableData((prev) => {});
  };

  const onUpdateClick = () => {
    const data = tableData.find((res) => res.id === selectedRows[0]);
    if (data.currentStatusCode === "BKD") {
      setAllStatus([
        { value: "INT", label: "In Transit" },
        { value: "RD", label: "Reached Destination" },
        { value: "DEL", label: "Delivered" },
      ]);
    } else if (data.currentStatusCode === "INT") {
      setAllStatus([
        { value: "RD", label: "Reached Destination" },
        { value: "DEL", label: "Delivered" },
      ]);
    } else if (data.currentStatusCode === "RD") {
      setAllStatus([{ value: "DEL", label: "Delivered" }]);
    }
    setUpdateModal(true);
  };

  const addTrip = () => {};

  const onCellClick = (e) => {
    setSelectedRows([...e?.rowSelection]);
  };

  return (
    <>
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
            zIndex={8}
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
          <BoxWrapper
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
          >
            {showUpdateButton && (
              <Button
                text="Update Status"
                variant="outlined"
                onClick={onUpdateClick}
                styles={{
                  width: "106px",
                  bgColor: "#FFFFFF",
                  color: "primary",
                  margin: "5px",
                  padding: 0,
                }}
              />
            )}
            <Button
              text="Add Trip"
              variant="contained"
              onClick={addTrip}
              styles={{ width: "96px", bgColor: "#0057D1", margin: "5px" }}
            />
          </BoxWrapper>
        </BoxWrapper>
        <BoxWrapper position="relative" top="50px" width="100%">
          <DataTable data={tableData} onCellClick={onCellClick} />
        </BoxWrapper>
      </BoxWrapper>
      <UpdateForm
        allStatus={allStatus}
        openModal={showUpdateModal}
        closeModal={setUpdateModal}
        updateTableData={updateTableData}
      />
    </>
  );
}

export default TableContainer;
