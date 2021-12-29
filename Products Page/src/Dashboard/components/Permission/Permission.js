import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import "./Permission.css";
import { getAllUsers } from "../../../api";
import { useSelector } from "react-redux";
import axios from "axios";

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

export default function DataGridDemo() {
  const [selected, setSelected] = useState([]);
  const [Users, setUsers] = useState([]);
  const [editRowsModel, setEditRowsModel] = useState({});
  const user = useSelector((state) => state.userReducer);
  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
    console.log("permission ", model);
  }, []);

  const addPermission = async () => {
    //here we will send request to remove permission from this users from database
    //selectionModel it's a SET  of unique ids of the user on the table
    console.log(selected);
    let data = {
      user_id: user.id,
      user_ids: Array.from(selected),
    };
    await axios.post("http://localhost:5000/users/permit", data);
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
        <Button
          disabled={selected.size ? false : true}
          variant="outlined"
          onClick={addPermission}
        >
          Add Selected Permission
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
