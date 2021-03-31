import { combineReducers } from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart-reducer";
import directoryReducer from "./collection/directory-data/directory.reducer";
import collectionReducer from "./collection/collection-data/collection.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shopData: collectionReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer;