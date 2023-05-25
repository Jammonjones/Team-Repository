// that is responsible to render our list of products to the new product-list.js file??
// productList(".product-list", "tents");
import { productList } from "./productList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
const category = getParam("category");
productList(".product-list", category);