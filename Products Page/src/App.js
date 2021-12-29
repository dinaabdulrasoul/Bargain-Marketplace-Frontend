import React, { useState, useEffect } from "react";
import {
  Products,
  Navbar,
  Cart,
  SingleProduct,
  AddProduct,
} from "./components";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Auth from "./components/Auth/Auth";
import { getAllItems } from "./api";
import { useDispatch, useSelector } from "react-redux";
import jwt from "jwt-decode";
import { userAction } from "./actions/user";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);

  useEffect(() => {
    const fetch = async () => {
      let products = await getAllItems();
      console.log("data", products.data);
      setProducts(products.data);
    };
    fetch();
  }, []);

  // useEffect(() => {
  //   if (localStorage.getItem("profile")) {
  //     console.log("heeeey");
  //     let token = localStorage.getItem("profile");
  //     let decoded = jwt(token);
  //     let user = { name: decoded.first_name, id: decoded.id };
  //     dispatch(userAction({ user }));
  //   }
  // }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={<Products products={products} />}
          ></Route>

          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/cart" element={<Cart cart={cart} />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route
            exact
            path="/cart"
            element={<Cart cart={{ line_items: [] }} />}
          ></Route>

          <Route exact path="/Create" element={<AddProduct />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
