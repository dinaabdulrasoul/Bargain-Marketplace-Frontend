import React, { useState, useEffect } from "react";
import { Products, Navbar, Cart, SingleProduct, AddProduct } from "./components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Auth from "./components/Auth/Auth";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {}, []);

// Mock products for design only
const mock_products = [
  {id: 1, name: 'Apple Macbook', seller_name: 'z store', description: 'Magic iPad Keyboard', price: 300, image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445' ,quantity: 0},
  {id: 2, name: 'Dell Laptop', seller_name: 'y store', description: 'Magic iPad Keyboard', price: 300, image: 'https://blogs.windows.com/wp-content/uploads/prod/2016/09/Dell-Sept-14.jpg',quantity: 0},
  {id: 3, name: 'Keyboard', seller_name: 'x store', description: 'Magic iPad Keyboard', price: 300, image: 'https://cdn.stamped.io/uploads/productImages/194093_6601656303789.jpg' ,quantity: 0},
  {id: 4, name: 'Gaming Mouse', seller_name: 'amazon', description: 'Magic iPad Keyboard', price:300, image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445' ,quantity: 0},
  {id: 5, name: 'iPhone XR', seller_name: 'souq', description: 'Magic iPad Keyboard', price:300, image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445' ,quantity: 0},
  {id: 6, name: 'Addidas Running Shoes', seller_name: 'x', description: 'Magic iPad Keyboard', price:300, image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445' ,quantity: 0},
  {id: 7, name: 'Nike Running Shoes', seller_name: 'x', description: 'Magic iPad Keyboard', price:300, image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445' ,quantity: 0},
  {id: 8, name: 'Addias Backbag', seller_name: 'x', description: 'Magic iPad Keyboard', price:300, image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445' ,quantity: 0}
];
  return (
    <Router>
      <div>
        <Navbar totalItems={3} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Products products={mock_products} />}
          ></Route>

          <Route path="/auth" exact element={<Auth />} />
          <Route exact path="/cart" element={<Cart cart={cart} />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path = "/cart" element = {<Cart cart={{line_items: []}} /> }>
                    </Route>
                {mock_products.map((p)=>(
                    <Route exact path = {`products/${p.id}`} element = {<SingleProduct product = {p}/>}>
                        </Route>
                ))}
          <Route exact path = '/Create' element = {<AddProduct/>}>
                </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
