import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  productCart,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  productCart: productCart,
});

export default reducers;
