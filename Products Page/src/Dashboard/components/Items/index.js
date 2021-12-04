import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Quantity",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "ItemName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "Price",
    headerName: "Price",
    type: "number",
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, ItemName: "Snow", Quantity: "Jon", Price: 35 },
  { id: 2, ItemName: "Lannister", Quantity: "Cersei", Price: 42 },
  { id: 3, ItemName: "Lannister", Quantity: "Jaime", Price: 45 },
  { id: 4, ItemName: "Stark", Quantity: "Arya", Price: 16 },
  { id: 5, ItemName: "Targaryen", Quantity: "Daenerys", Price: null },
  { id: 6, ItemName: "Melisandre", Quantity: null, Price: 150 },
  { id: 7, ItemName: "Clifford", Quantity: "Ferrara", Price: 44 },
  { id: 8, ItemName: "Frances", Quantity: "Rossini", Price: 36 },
  { id: 9, ItemName: "Roxie", Quantity: "Harvey", Price: 65 },
];

export default function Items() {
  const [selected, setSelected] = useState([]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pPriceSize={5}
        rowsPerPPriceOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          setSelected(selectedIDs);
        }}
      />
    </div>
  );
}
