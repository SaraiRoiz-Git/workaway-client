import * as AT from "../actions/actionsTypes";

const initialState = {
  activeUser: ""
};

const activeUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.ON_LOGIN:
      return {
        ...state,
        activeUserToken: action.payload,
        activeUser: true
      };
    case AT.ON_LOGOUT:
      return {
        ...state,
        activeUserToken: "",
        activeUser: false
      };

    default:
      return state;
  }
};

export default activeUserReducer;
