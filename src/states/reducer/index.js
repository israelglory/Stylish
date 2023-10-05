import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import searchReducer from "./search_data";
import { combineReducers } from "redux";

const allReducers = combineReducers({
     search: searchReducer,
     wishlistReducer: wishlistReducer,
     cartReducer: cartReducer,
});

export default allReducers;