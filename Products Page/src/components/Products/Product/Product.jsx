import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, CardActionArea} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';

//const Product = ({product, onAddToCart}) 
const Product =({product})=> {
    const classes = useStyles();
    return (
        <Card className = {classes.root}>
        <CardActionArea  component= {Link} to="/single-product">
            <CardMedia className = {classes.media} image= {product.image} title = {product.name}/>
<CardContent>
    <div className = {classes.cardContent}>
        <Typography variant = "h5" gutterButtom>
            {product.name}
            </Typography>
            <Typography variant = "h6" style={{color: "#85bb65"}}>
            {product.price}
            </Typography>
    </div>
    <Typography variant = "h7">Seller: <strong>{product.seller_name}</strong></Typography>
        </CardContent>
        <CardActions disableSpacing className = {classes.cardActions}>
            {/*<IconButton aria-label = "Add to Cart" onClick ={()=> onAddToCart(product.id, 1)}> */}
            <IconButton aria-label = "Add to Cart"  component = {Link} to='/cart' >
                <AddShoppingCart />
            </IconButton>
        </CardActions>


        </CardActionArea>
        </Card>

    )
}

export default Product


