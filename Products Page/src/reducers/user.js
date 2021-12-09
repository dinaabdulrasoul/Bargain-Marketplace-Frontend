import { USER } from "../constants/actionTypes";

const user = {
  name: "",
  id: "",
};

export const userReducer = (state = { user }, action) => {
  switch (action.type) {
    case USER:
      return { name: action.payload.user.name, id: action.payload.user.id };

    default:
      return state;
  }
};
