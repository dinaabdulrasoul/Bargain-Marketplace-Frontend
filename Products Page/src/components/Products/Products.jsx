import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const mock_products = [
    {id: 1, name: 'Keyboard', seller_name: 'x', description: 'Magic iPad Keyboard', price:'300 EGP', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445' },
    {id: 2, name: 'Dell Latitude 3310 Laptop', seller_name: 'x', description: 'Magic iPad Keyboard', price:'300 EGP', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445'},
    {id: 3, name: 'Apple Macbook', seller_name: 'x', description: 'Magic iPad Keyboard', price:'300 EGP', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445' },
    {id: 4, name: 'Gaming Mouse', seller_name: 'x', description: 'Magic iPad Keyboard', price:'300 EGP', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445' },
    {id: 5, name: 'iPhone XR', seller_name: 'x', description: 'Magic iPad Keyboard', price:'300 EGP', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445' },
    {id: 6, name: 'Addidas Running Shoes', seller_name: 'x', description: 'Magic iPad Keyboard', price:'300 EGP', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445' },
    {id: 7, name: 'Nike Running Shoes', seller_name: 'x', description: 'Magic iPad Keyboard', price:'300 EGP', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445' },
    {id: 8, name: 'Addias Backbag', seller_name: 'x', description: 'Magic iPad Keyboard', price:'300 EGP', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445' }
];

//const Products = ({products, onAddToCart})
const Products = ()=>{
    const classes = useStyles();

    return (
        <main className = {classes.content}>
            <div className = {classes.toolbar}/>
        <Grid container justify="center" spacing ={4}>
        {mock_products.map((product) =>(
            <Grid item key = {product.id} xs={12} sm={6} nd= {4} lg ={3}>
                {/* <Product product = {product} onAddToCart = {onAddToCart}/> */}
                <Product product = {product}/>
        </Grid>
        ))}
        </Grid>
    </main>
    );

}

export default Products;