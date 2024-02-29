import * as React from "react";

import clsx from "clsx";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "tripId", headerName: "Trip id", width: 100 },
  { field: "transporter", headerName: "Transporter", width: 150 },
  {
    field: "source",
    headerName: "Source",
    width: 150,
  },
  {
    field: "dest",
    headerName: "Destination",
    width: 150,
  },
  {
    field: "phoneNumber",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "etaDays",
    headerName: "ETA",
    width: 100,
  },
  {
    field: "distanceRemaining",
    headerName: "Distance remaining",
    width: 100,
  },
  {
    field: "currenStatus",
    headerName: "Trip Status",
    width: 200,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 120,
            height: 30,
            fontFamily: "Source Sans Pro",
            backgroundColor: "#D7E3FE",
            marginRight: 5,
            borderRadius: "6px",
            fontWeight: "400px",
            fontSize: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#24428A",
          }}
        >
          {params.value}
        </div>
      </div>
    ),
  },
  {
    field: "tat",
    headerName: "TAT Status",
    width: 150,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 120,
            height: 30,
            fontFamily: "Source Sans Pro",
            backgroundColor: `${
              params.value === "On time"
                ? "#C2FAEA"
                : params.value === "Others"
                ? "#FFECDB"
                : "#F9D7D7"
            }`,
            marginRight: 5,
            borderRadius: "6px",
            fontWeight: "400px",
            fontSize: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: `${
              params.value === "On time"
                ? "#008F66"
                : params.value === "Others"
                ? "#D97F30"
                : "#CC3333"
            }`,
          }}
        >
          {params.value}
        </div>
      </div>
    ),
  },
];

export default function DataTable(props) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <DataGrid
        rows={props.data}
        columns={columns}
        sx={{
          ".MuiDataGrid-columnHeaders": {
            backgroundColor: "#E0E0E0",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "20px",
            letterSpacing: "0px",
            textAlign: "center",
          },
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        onStateChange={(e) => props.onCellClick(e)}
        pageSizeOptions={[10, 20, 50]}
        disableColumnFilter={true}
        checkboxSelection
      />
    </div>
  );
}
