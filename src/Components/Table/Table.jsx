import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "tripId", headerName: "Trip id", minWidth: 100 },
  { field: "transporter", headerName: "Transporter", minWidth: 150 },
  {
    field: "source",
    headerName: "Source",
    minWidth: 150,
  },
  {
    field: "dest",
    headerName: "Destination",
    minWidth: 150,
  },
  {
    field: "phoneNumber",
    headerName: "Phone",
    minWidth: 150,
  },
  {
    field: "etaDays",
    headerName: "ETA",
    minWidth: 100,
  },
  {
    field: "distanceRemaining",
    headerName: "Distance remaining",
    minWidth: 150,
  },
  {
    field: "currenStatus",
    headerName: "Trip Status",
    minWidth: 150,
  },
  {
    field: "tat",
    headerName: "TAT Status",
    minWidth: 150,
  },
];

export default function DataTable(props) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
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
            textAlign: "left",
          },
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        onCellClick={(e) => props.onCellClick(e)}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
