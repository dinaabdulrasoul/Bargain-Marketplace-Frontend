import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";
import TextField from "@mui/material/TextField";

//const Products = ({products, onAddToCart})
const Products = ({ products }) => {
  const [data, setData] = useState(products);

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
