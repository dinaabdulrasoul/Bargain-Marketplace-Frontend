import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ListItemIcon,
} from "@material-ui/core";

import useStyles from "./styles";
import { useState } from "react";

const CartItem = ({ item }) => {
  const classes = useStyles();
  //   const [count, setCount] = useState(item.quantity);
  return (
    <Card>
      <CardMedia
        image={item.Item.image}
        alt={item.Item.title}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.Item.title}</Typography>
        <Typography variant="h5"></Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => {}}>
            -
          </Button>
          {/* <Typography>{item.quantity}</Typography> */}
          <Button type="button" size="small">
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          style={{ backgroundColor: "#EC8484" }}
          color="primary"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
