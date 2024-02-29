import { combineReducers } from "redux";
import { productReducer, selectedProductReducer,addCartReducer ,returnCartReducer} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product:selectedProductReducer,
  cartAdd:addCartReducer,
cardReturn:returnCartReducer,
});

export default reducers;
