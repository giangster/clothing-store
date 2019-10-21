import { takeEvery, call, put } from "redux-saga/effects";
import firestore from "./../../firebase/firebase.utils";

import ShopActionTypes from "./shop-types";
import { convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop-actions";

export function* fetchCollectionsAsync() {
  yield console.log("Look at meeeeeeee");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
