import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FlatButton from "@material-ui/core/Button";
import useStyles from './styles';
import {PhotoCamera} from '@material-ui/icons';
import {Typography} from '@material-ui/core';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import { useForm } from "react-hook-form";


const defaultValues = {
    productName: "",
    Price: 0,
    Description: "",
    Picture: "",
  };

const AddProduct = () => {
    
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return(
        <form onSubmit={handleSubmit(onSubmit)} className = {classes.root} spacing = {3} style={{ minHeight: '100vh', minWidth: "50%" }}>
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            alignItems={'center'} 
            style={{ minHeight: '100vh' }}>

        <Grid item
            align = "center"
            justifyContent="center">
            <LinkedCameraIcon fontSize="large"  />
            <Typography variant="h6" align="center">Upload Product Photo</Typography>
        <FlatButton label="Choose file" labelPosition="before" align="center" >
        <input type="file"/>
        </FlatButton>

        </Grid>

        <Grid item>
        <TextField
            id="name-input"
            name="productName"
            label="Product Name"
            type="text"
            value={defaultValues.productName}
            />
            </Grid>

            <Grid item>
            <TextField
            id="description-input"
            name="Description"
            label="Product Description"
            type="text"
            value={defaultValues.Description}
            />
            </Grid>

            <Grid item>
            <TextField 
            id="price-input"
            name="Price"
            label="Product Price"
            type="number"
            value={defaultValues.Price}
          />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit" style = {{backgroundColor: "#EC8484"}}>
            Save
            </Button>
            </Grid>
            </Grid>
            </form>
 
    );
}

export default AddProduct
