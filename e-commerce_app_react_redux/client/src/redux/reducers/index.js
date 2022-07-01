import { combineReducers } from "redux";
import filters from "./filter";
import products from "./products";
import category from "./category";
import oneProduct from "./oneProduct";
import sorted from "./sorted";
import getID from "./getID";
import search from "./search";
import searchItem from "./searchItem";
import searchByCat from "./searchByCat";

const rootReducer = combineReducers({
  filters,
  category,
  products,
  oneProduct,
  sorted,
  getID,
  search,
  searchItem,
  searchByCat,
});

export default rootReducer;
