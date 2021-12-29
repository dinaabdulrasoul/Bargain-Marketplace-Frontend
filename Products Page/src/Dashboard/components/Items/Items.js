import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import "./Items.css";
import { getAllItemsByUsers } from "../../../api";
import jwt from "jwt-decode";
import axios, { Axios } from "axios";
import { useSelector } from "react-redux";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Item Name",
    width: 150,
    editable: true,
  },
  {
    field: "description",
    headerName: "description",
    width: 150,
    editable: true,
  },
  {
    field: "price",
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
  const [items, setItems] = useState([]);
  const user = useSelector((state) => state.userReducer);

  const handleEditRowsModelChange = React.useCallback((model) => {
    console.log(model);

    setEditRowsModel(model);
  }, []);

  const deleteItem = async () => {
    //here we will send request to delete this items from database

    let a = Array.from(selected);
    console.log(a);
    console.log(selected);
    await axios.delete("http://localhost:5000/items/delete", { data: { a } });
  };

  const onCellEditCommit = async () => {
    console.log(editRowsModel);
    let obj = {};

    let temp = Object.keys(editRowsModel).reduce(function (r, k) {
      return r.concat(k, editRowsModel[k]);
    }, []);
    console.log("temp", temp);
    let temp1 = Object.keys(temp[1]).reduce(function (r, k) {
      obj[k] = temp[1][k].value;
    }, []);
    // console.log("temp1", temp1);
    // Object.keys(temp1[1]).reduce(function (r, k) {
    //   obj[k] = temp1[1][k].value;
    // }, []);
    obj["id"] = temp[0];
    obj["user_id"] = user.id;

    console.log("items", obj);
    await axios.put(`http://localhost:5000/items/${obj.id}`, obj);

    // let item = {
    //   id: Object.keys(editRowsModel)[0],
    //   [Object.keys(editRowsModel[Object.keys(editRowsModel)[0]])[0]]:
    //     editRowsModel[Object.keys(editRowsModel)[0]][
    //       Object.keys(editRowsModel[Object.keys(editRowsModel)[0]])[0]
    //     ].value,
    // };
    // console.log(item);
    // await axios.put(`http://localhost:5000/items/${item.id}`, item);
  };

  useEffect(() => {
    let token = localStorage.getItem("profile");
    let { id } = jwt(token);

    //fetching data to show in rows

    const fetchItems = async (id) => {
      let urs = await getAllItemsByUsers(id);
      setItems(urs.data);
    };

    fetchItems(id);
  }, []);

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <div className="control-center">
        <Button
          disabled={selected.size ? false : true}
          variant="outlined"
          color="error"
          onClick={deleteItem}
        >
          Delete Selected Items
        </Button>
      </div>
      {console.log(items)}
      <DataGrid
        rows={items}
        columns={columns}
        pPriceSize={5}
        rowsPerPPriceOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          console.log(selectedIDs);
          setSelected(selectedIDs);
        }}
        editRowsModel={editRowsModel}
        onEditRowsModelChange={handleEditRowsModelChange}
        editMode="row"
        onRowEditCommit={onCellEditCommit}
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
