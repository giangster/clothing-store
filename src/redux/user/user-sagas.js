import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  googleProvider,
  createUserProfileDocument,
  auth
} from "../../firebase/firebase.utils";

import UserActionTypes from "./user-types";

import {
  googleSignInSuccess,
  emailSignInSuccess,
  googleSignInFailure,
  emailSignInFailure
} from "./user-actions";

export function* googleSignIn() {
  try {
    const userRef = yield auth.signInWithPopup(googleProvider);
    console.log(userRef);
  } catch (err) {
    yield put(googleSignInFailure(err.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export default function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
