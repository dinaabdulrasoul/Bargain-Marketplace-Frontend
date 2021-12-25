import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import Payment from "../Checkout/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { getCartItem } from "../../api";
import axios from "axios";

const Cart = ({ cart }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.userReducer);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      const data = await getCartItem(user.id);
      console.log("CAAAAARt", data.data);
      setProducts((prev) => [...data.data.cart]);
    };
    fetch();
  }, []);
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link to="/" className={classes.link} style={{ color: "#EC8484" }}>
        {" "}
        <strong>start adding some!</strong>
      </Link>
    </Typography>
  );

  const FilledCart = () => {
    const handleCheckout = async () => {
      let data = products.map((item) => ({
        price_id: item.Item.price_id,
        quantity: item.Item.quantity,
      }));
      console.log(data);
      let res = await axios.post(
        "http://localhost:5000/create-checkout-session",
        {
          products: data,
        }
      );

      window.location.href = res.data.url;
    };
    return (
      <>
        <Grid container spacing={3}>
          {products.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <CartItem item={item} />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="outlined"
          label="submit checkout"
          onClick={handleCheckout}
        >
          Submit checkout
        </Button>
        <div className={classes.cardDetails}>
          <Typography varient="h4">Subtotal:</Typography>
        </div>
      </>
    );
  };

  if (!products.length) return "Loading...";

  return (
    <Container>
      {console.log(products)}
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {/* <Payment /> */}
      {!products.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
