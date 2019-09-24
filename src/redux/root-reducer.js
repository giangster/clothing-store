import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
  key: "root",
  storage,
  //whitelist is an array of strings of the reducer we want to persist.
  //In this case, there is only the cart reducer, since Firebase handles the user reducer.
  //In the future, add more reducer that you want to persist to this array.
  whitelist: ["cart", "directory"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);
