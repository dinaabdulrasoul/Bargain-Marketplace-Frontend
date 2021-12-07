import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

<<<<<<< HEAD
    router("/");
=======
    router('/');
>>>>>>> 9c8e77753427700a7785a42956ffdfcb87bc8a44
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

<<<<<<< HEAD
    router("/");
=======
    router('/');
>>>>>>> 9c8e77753427700a7785a42956ffdfcb87bc8a44
  } catch (error) {
    console.log(error);
  }
};
