import React from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input, Typography, Grid } from "@material-ui/core";
import { Input as AntdInput, InputNumber } from "antd";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FlatButton from "@material-ui/core/Button";
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import "./styles.css";



const AddProduct = () => {
    
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    };

    return(
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Product Image</label>
      <Controller
        render={({ field }) => <input type="file" ref={control} />}
        name="productImage"
        control={control}
        defaultValue=""
      />
      <label>Product Name</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="productName"
        control={control}
        defaultValue=""
      />
      <label>Product Description</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="productDescription"
        control={control}
        defaultValue=""
      />

      <label>Product Price</label>
      <Controller
        render={({ field }) => <InputNumber {...field} min={1} />}
        name="productPrice"
        control={control}
        defaultValue=""
      />

      <input type="submit" />
    </form>
 
    );
}

export default AddProduct
