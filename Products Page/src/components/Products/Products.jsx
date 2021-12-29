import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";
import TextField from "@mui/material/TextField";
import jwt from "jwt-decode";
import { userAction } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";

//const Products = ({products, onAddToCart})
const Products = ({ products }) => {
  const [data, setData] = useState(products);
  const dispatch = useDispatch();
  const classes = useStyles();

  const filter = (e) => {
    let input = e.target.value;
    console.log("data", data);

    if (input !== "") {
      let result = data.filter((item) => {
        console.log(item);
        return item.title.startsWith(input);
      });
      setData(result);
    } else {
      setData(products);
    }
  };
  useEffect(() => {
    console.log("effect", products);
    setData(products);
  }, [products]);

  useEffect(() => {
    if (localStorage.getItem("profile")) {
      console.log("heeeey");
      let token = localStorage.getItem("profile");
      let decoded = jwt(token);
      let user = { name: decoded.first_name, id: decoded.id };
      dispatch(userAction({ user }));
    }
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        style={{ margin: "15px" }}
        onChange={filter}
      />
      <Grid container justify="center" spacing={4}>
        {data?.length > 0
          ? data.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} nd={4} lg={3}>
                {/* <Product product = {product} onAddToCart = {onAddToCart}/> */}
                <Product product={product} />
              </Grid>
            ))
          : null}
      </Grid>
    </main>
  );
};

export default Products;
