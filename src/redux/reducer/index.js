import { combineReducers } from "redux";
import { productReducer, selectedProductReducer,addCartReducer ,removeCartReducer} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product:selectedProductReducer,
  cartAdd:addCartReducer,
  removeFromCart:removeCartReducer,
});

export default reducers;
