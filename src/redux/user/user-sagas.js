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
    const { user } = yield auth.signInWithPopup(googleProvider);

    const userRef = yield call(createUserProfileDocument, user);

    const userSnapshot = yield userRef.get();

    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (err) {
    yield put(googleSignInFailure(err.message));
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    const userRef = yield call(createUserProfileDocument, user);

    const userSnapshot = yield userRef.get();

    yield put(
      emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (err) {
    yield put(emailSignInFailure(err.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export default function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
