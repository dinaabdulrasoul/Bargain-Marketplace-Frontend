import React, { useState, useEffect } from "react";
import { Products, Navbar, Cart, SingleProduct } from "./components";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // Mock products for design only
  const mock_products = [
    {
      id: 1,
      name: "Keyboard",
      seller_name: "x store",
      description: "Magic iPad Keyboard",
      price: "300 EGP",
      image:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445",
    },
    {
      id: 2,
      name: "Dell Laptop",
      seller_name: "y store",
      description: "Magic iPad Keyboard",
      price: "300 EGP",
      image:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445",
    },
    {
      id: 3,
      name: "Apple Macbook",
      seller_name: "z store",
      description: "Magic iPad Keyboard",
      price: "300 EGP",
      image:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      seller_name: "amazon",
      description: "Magic iPad Keyboard",
      price: "300 EGP",
      image:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445",
    },
    {
      id: 5,
      name: "iPhone XR",
      seller_name: "souq",
      description: "Magic iPad Keyboard",
      price: "300 EGP",
      image:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445",
    },
    {
      id: 6,
      name: "Addidas Running Shoes",
      seller_name: "x",
      description: "Magic iPad Keyboard",
      price: "300 EGP",
      image:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445",
    },
    {
      id: 7,
      name: "Nike Running Shoes",
      seller_name: "x",
      description: "Magic iPad Keyboard",
      price: "300 EGP",
      image:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445",
    },
    {
      id: 8,
      name: "Addias Backbag",
      seller_name: "x",
      description: "Magic iPad Keyboard",
      price: "300 EGP",
      image:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445",
    },
  ];
  const item = {
    id: 1,
    name: "Keyboard",
    seller_name: "x store",
    description:
      "sDKJnkjdsakljsdmjdslkdslkdlkdsklfdmdkmlfkmckmdxm,fkmd,mm,fmsdkjfmdlkfklsmflksmklfm",
    price: "300 EGP",
    image:
      "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111160445",
  };
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
          <Route
            exact
            path="/my-products"
            element={<Products products={mock_products} />}
          ></Route>

          <Route exact path="/cart" element={<Cart cart={cart} />}></Route>
          <Route
            exact
            path="/single-product"
            element={<SingleProduct product={item} />}
          ></Route>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
