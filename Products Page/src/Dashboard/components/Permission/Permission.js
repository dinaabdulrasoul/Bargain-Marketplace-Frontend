import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import "./Permission.css";
import { getAllUsers } from "../../../api";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "first_name",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "last_name",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",

    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 100, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataGridDemo() {
  const [selected, setSelected] = useState([]);
  const [Users, setUsers] = useState([]);
  const [editRowsModel, setEditRowsModel] = useState({});

  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
    console.log(model);
  }, []);

  const removePermission = (selectionModel) => {
    //here we will send request to remove permission from this users from database
    //selectionModel it's a SET  of unique ids of the user on the table
  };

  useEffect(() => {
    //fetching data to show in rows
    const fetchUsers = async () => {
      let urs = await getAllUsers();
      setUsers(urs.data);
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <div className="control-center">
        {console.log(Users)}
        <Button
          disabled={selected.size ? false : true}
          variant="outlined"
          color="error"
          onClick={removePermission}
        >
          Remove Selected Permission
        </Button>
      </div>
      <DataGrid
        rows={Users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          setSelected(selectedIDs);
          console.log(selected);
        }}
        editRowsModel={editRowsModel}
        onEditRowsModelChange={handleEditRowsModelChange}
        // onSelectionModelChange={selectedRows}

        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
    </div>
  );
}
