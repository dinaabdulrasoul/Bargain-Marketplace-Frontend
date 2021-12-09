import { USER } from "../constants/actionTypes";
export const userAction = (data) => {
  return {
    type: USER,
    payload: data,
  };
};
