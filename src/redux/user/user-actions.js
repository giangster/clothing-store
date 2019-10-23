import UserActionTypes from "./user-types.js";

export const setCurrentUser = user => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  };
};

export const googleSignInStart = () => {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_START };
};

export const googleSignInSuccess = user => {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS, payload: user };
};

export const googleSignInFailure = err => {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE, payload: err };
};

export const emailSignInStart = emailAndPassword => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
  };
};

export const emailSignInSuccess = () => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS
  };
};

export const emailSignInFailure = err => {
  return { type: UserActionTypes.EMAIL_SIGN_IN_FAILURE, payload: err };
};
