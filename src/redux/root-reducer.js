import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  //whitelist is an array of strings of the reducer we want to persist.
  //In this case, there is only the cart reducer, since Firebase handles the user reducer.
  //In the future, add more reducer that you want to persist to this array.
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
