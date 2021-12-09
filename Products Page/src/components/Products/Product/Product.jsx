import React, { useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CardActionArea,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postCartItem } from "../../../actions/cart";

//const Product = ({product, onAddToCart})
const Product = ({ product }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer);

  const handleClick = (prodId) => {
    let data = { item_id: prodId, user_id: user.id };
    dispatch(postCartItem(data));
  };
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`products/${product.id}`}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.title}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h6" gutterButtom>
              {product.title}
            </Typography>
            <Typography variant="h6" style={{ color: "#85bb65" }}>
              Price: {product.price} EGP
            </Typography>
          </div>
          <Typography variant="h6">
            Seller: {product.User.first_name}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          {/*<IconButton aria-label = "Add to Cart" onClick ={()=> onAddToCart(product.id, 1)}> */}
          <IconButton
            onClick={() => handleClick(product.id)}
            aria-label="Add to Cart"
            component={Link}
            to="/cart"
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Product;
