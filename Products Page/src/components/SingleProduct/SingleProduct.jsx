import React from 'react';
import {Card, Grid, CardMedia, CardContent, CardActions, Typography, Button, IconButton, CardActionArea} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';
import Product from '../Products/Product/Product';
import {useState} from 'react';


const SingleProduct = ({product}) => {
    const [count, setCount] = useState(product.quantity);
    const [total_price, setTotalPrice] = useState((product.price)*count);

    const increaseQuantity = (count, price) => {
        count = count + 1;
        setCount(count);
        price = count * price;
        setTotalPrice(price);

    };
    const decreaseQuantity = (count,price) => {
    if(count!==0) 
    {   count = count - 1;
        setCount(count);
        price = count * price;
        setTotalPrice(price); }
};


    const classes = useStyles();
        return (
            <Grid   container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
                 <Card   className = {classes.root} spacing = {3} style={{ minHeight: '100vh', minWidth: "50%" }}>
                <CardMedia className = {classes.media} image= {product.image} title = {product.name}
                r={200} />
    <CardContent>
    <div className = {classes.cardContent}>
                <Typography variant = "h4" color="black" align ="center"
            justifyContent="center">
                {product.name}
                </Typography>
        </div>
        <Typography variant = "h6">Seller: <strong>{product.seller_name}</strong></Typography>
        <div className = {classes.cardContent}>
                <Typography variant = "h6" style={{color: "#85bb65"}}>
                Price: {product.price} EGP
                </Typography>
        </div>
        <Typography variant = "h6"> <strong> Item Description: </strong> </Typography>
        <Typography variant = "h7">{product.description}</Typography>
            </CardContent>
            <CardActions className = {classes.cardActions} alignItems="center"
            justifyContent="center">
                <div className = {classes.buttons}>
                    <Button type="button" size="small" onClick={() => decreaseQuantity(count, product.price)}>-</Button>
                    </div>
                    <Typography variant = "h7"><strong>{count}</strong></Typography>
                    <div>
                    <Button type="button" size="small" onClick={() => increaseQuantity(count, product.price)}>+</Button>
                </div>
        
                
                <div className = {classes.buttons}>
                    <Button variant="contained" type="button" style = {{backgroundColor: "#EC8484"}} color='primary'>Update Cart</Button>
                    </div>
            </CardActions>
            { count!==0 && (
            <div className = {classes.buttons}>
                <Typography variant = "h6" style={{ textAlign: 'center' }} >
                Total Price: <strong>{total_price}</strong> 
                </Typography>
                </div> ) }
            
            </Card>
            </Grid>



    
    )
}

export default SingleProduct
