import React, { useEffect, useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "ItemName",
    headerName: "Item Name",
    width: 150,
    editable: true,
  },
  {
    field: "Quantity",
    headerName: "Quantity",
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
  { id: 1, ItemName: "Snow", Quantity: "15", Price: 35 },
  { id: 2, ItemName: "Lannister", Quantity: "10", Price: 42 },
  { id: 3, ItemName: "Lannister", Quantity: "2", Price: 45 },
  { id: 4, ItemName: "Stark", Quantity: "4", Price: 16 },
  { id: 5, ItemName: "Targaryen", Quantity: "165", Price: null },
  { id: 6, ItemName: "Melisandre", Quantity: null, Price: 150 },
  { id: 7, ItemName: "Clifford", Quantity: "1", Price: 44 },
  { id: 8, ItemName: "Frances", Quantity: "30", Price: 36 },
  { id: 9, ItemName: "Roxie", Quantity: "8", Price: 65 },
];

export default function Items() {
  const [selected, setSelected] = useState([]);
  const [editRowsModel, setEditRowsModel] = useState({});

  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
  }, []);

  const deleteItem = (selected) => {
    //here we will send request to delete this items from database
  };

  useEffect(() => {
    //fetching data to show in rows
    return () => {};
  }, []);

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
        editRowsModel={editRowsModel}
        onEditRowsModelChange={handleEditRowsModelChange}
      />
    </div>
  );
}
