import UserActionTypes from "./user-types.js";

const ORIGIN_STATE = {
  currentUser: null,
  message: ""
};

const userReducer = (state = ORIGIN_STATE, action) => {
  switch (action.type) {
    //Stacking cases is doable
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        message: null
      };
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
