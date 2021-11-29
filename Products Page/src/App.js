import React, {useState, useEffect} from 'react';
import {Products, Navbar, Cart} from './components';
import { commerce } from './lib/commerce';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async() => {
        const {data} = await commerce.products.list();
        setProducts(data);
    }
    const fetchCart = async() =>{
        const cart= await commerce.cart.retrieve();
        setCart(cart);

    }
    const handleAddToCart = async(productId, quantity) =>{
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);

    }

useEffect(()=> {
    fetchProducts();
    fetchCart();
}, []);
//console.log(cart);
//console.log(products);
    return (
        <Router>
        <div>
            {/* <Navbar totalItems = {cart.total_items} />
            <Routes>
                <Route exact path = "/" element = {<Products products = {products} onAddToCart = {handleAddToCart}/>}>
                </Route>
                <Route exact path = "/cart" element = {<Cart cart={cart} /> }>
                </Route> */}
                <Navbar totalItems = {3} />
            <Routes>
                <Route exact path = "/" element = {<Products products />}>
                </Route>

                <Route exact path = "/my-products" element = {<Products products />}>
                </Route>

                <Route exact path = "/cart" element = {<Cart cart={cart} /> }>
                </Route>
            </Routes>
            
        </div>
        </Router>
    )
}

export default App;
