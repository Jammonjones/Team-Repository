import { setLocalStorage, getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";


// copied from example code
// this should test findProductbyId and getParam functions
const productId = getParam("product");
productDetails(productId);
