import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import Payment from "../Checkout/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { getCartItem } from "../../api";

const Cart = ({ cart }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.userReducer);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      const data = await getCartItem(user.id);
      console.log("CAAAAARt", data.data);
      setProducts((prev) => [...prev, ...data.data.cart]);
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

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography varient="h4">Subtotal:</Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            style={{ backgroundColor: "#B08844" }}
          >
            Empty Cart
          </Button>

          {/* <Button className = {classes.checkoutButton} size='large' type='button' variant='contained' color='primary'
                style = {{backgroundColor: "#EC8484"}}>
                    Checkout
                </Button> */}
        </div>
      </div>
    </>
  );

  if (!products.length) return "Loading...";

  return (
    <Container>
      {console.log(products)}
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      <Payment />
      {!products.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
