import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";

import { Input as AntdInput, InputNumber } from "antd";
import { addItem } from "../../api";
import "./styles.css";

const AddProduct = () => {
  const { control, handleSubmit } = useForm();
  const [isAuthenticated, setAuthenticated] = useState(false);
  const user = useSelector((state) => state.userReducer);
  const onSubmit = async (data) => {
    data = { ...data, user_id: user.id };
    await addItem(data);
  };

  useEffect(() => {
    if (user.id) {
      setAuthenticated(true);
    }
  }, [user.id]);

  return isAuthenticated ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Product Image</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="image"
        control={control}
        defaultValue=""
      />
      <label>Product Name</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="title"
        control={control}
        defaultValue=""
      />
      <label>Product Description</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="description"
        control={control}
        defaultValue=""
      />

      <label>Product Price</label>
      <Controller
        render={({ field }) => <InputNumber {...field} min={1} />}
        name="price"
        control={control}
        defaultValue=""
      />

      <input type="submit" />
    </form>
  ) : (
    <h2
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Please Login to Add product
    </h2>
  );
};

export default AddProduct;
