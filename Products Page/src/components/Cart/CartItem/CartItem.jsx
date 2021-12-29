import React, { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";
import axios from "axios";
import { responsiveMap } from "antd/lib/_util/responsiveObserve";

const CartItem = ({ item, state }) => {
  const classes = useStyles();
  const [count, setCount] = useState();

  const handleRemove = async () => {
    let res = await axios.delete(`http://localhost:5000/cart`, {
      data: { id: item.id },
    });
    state((old) => !old);
  };
  return (
    <Card>
      <CardMedia
        image={item.Item.image}
        alt={item.Item.title}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.Item.title}</Typography>
        <Typography variant="h5">Qty: {item.item_quantity}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          variant="contained"
          type="button"
          style={{ backgroundColor: "#EC8484" }}
          color="primary"
          onClick={handleRemove}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
