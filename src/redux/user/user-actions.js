import UserActionTypes from "./user-types.js";

export const googleSignInStart = () => {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_START };
};

export const emailSignInStart = emailAndPassword => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
  };
};

export const signInSuccess = user => {
  return { type: UserActionTypes.SIGN_IN_SUCCESS, payload: user };
};

export const signInFailure = err => {
  return { type: UserActionTypes.SIGN_IN_FAILURE, payload: err };
};

export const emailSignInSuccess = () => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS
  };
};

export const checkUserSession = () => {
  return { type: UserActionTypes.CHECK_USER_SESSION };
};

export const signOutStart = () => {
  return {
    type: UserActionTypes.SIGN_OUT_START
  };
};

export const signOutSuccess = () => {
  return { type: UserActionTypes.SIGN_OUT_SUCCESS };
};

export const signOutFailure = err => {
  return { type: UserActionTypes.SIGN_OUT_FAILURE, payload: err };
};
