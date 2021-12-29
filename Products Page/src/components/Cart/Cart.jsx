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
  const [rerender, setRerender] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      const data = await getCartItem(user.id);
      console.log("CAAAAARt", data.data);
      let final = [];
      for (let item of data.data.cart) {
        if (!final.length) {
          final.push({ ...item, item_quantity: 1 });
          continue;
        }
        let flag = false;
        for (let finItem of final) {
          if (item.item_id == finItem.item_id) {
            finItem["item_quantity"]++;
            flag = true;
            break;
          }
        }
        if (!flag) final.push({ ...item, item_quantity: 1 });
      }
      console.log("final data", final);
      setProducts((prev) => [...final]);
    };
    fetch();
  }, [rerender]);

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
        quantity: item.item_quantity,
      }));

      let data2 = products.map((item) => ({
        seller_id: item.Item.user_id,
        item_id: item.item_id,
        buyer_id: item.user_id,
        quantity: item.item_quantity,
      }));
      console.log("caraaaaaaat iteeeeeeeem", { items: data2 });
      await axios.post(`http://localhost:5000/checkout`, { items: data2 });
      let res = await axios.post(
        "http://localhost:5000/create-checkout-session",
        {
          products: data,
        }
      );
      console.log(res);
      window.location.href = res.data.url;
    };

    return (
      <>
        <Grid container spacing={3}>
          {products.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <CartItem item={item} state={setRerender} />
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
      </>
    );
  };

  return (
    <Container>
      {console.log(products)}
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>

      {!products.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
