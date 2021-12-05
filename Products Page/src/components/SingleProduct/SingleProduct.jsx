import React from 'react';
import {Card, Grid, CardMedia, CardContent, CardActions, Typography, Button, IconButton, CardActionArea} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';
import Product from '../Products/Product/Product';
import {useState} from 'react';


const SingleProduct = ({product}) => {
    const [count, setCount] = useState(product.quantity);
    const classes = useStyles();
        return (
            <Grid   container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
                 <Card   className = {classes.root} spacing = {3} >
                <CardMedia className = {classes.media} image= {product.image} title = {product.name}
                r={200}/>
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
                Price: {product.price}
                </Typography>
        </div>
        <Typography> <strong> Item Description: </strong> </Typography>
        <Typography style={{color:"#808080"}}>{product.description}</Typography>
            </CardContent>
            <CardActions className = {classes.cardActions} alignItems="center"
            justifyContent="center">
                <div className = {classes.buttons}>
                    <Button type="button" size="small" onClick={() => {if(count!==0) setCount(count - 1)}}>-</Button>
                    </div>
                    <Typography><strong>{count}</strong></Typography>
                    <div>
                    <Button type="button" size="small" onClick={() => setCount(count + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" style = {{backgroundColor: "#EC8484"}} color='primary'>Remove</Button>
            </CardActions>
    
            </Card>
            </Grid>



    
    )
}

export default SingleProduct
