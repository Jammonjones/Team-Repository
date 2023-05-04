let products = [];
let cartItems = getLocalStorage("so-cart") || [];
import { setLocalStorage } from "./utils.mjs";
import { findProductById } from "productData.mjs";
import productDetails from "productDetails.mjs"

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

// get products data and add event listener
async function init() {
  products = await fetch("../json/tents.json").then(convertToJson);
  document.getElementById("addToCart").addEventListener("click", addToCart);
}

// retrieve data from localstorage.
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}


// call init function to fetch data and add event listener
init();

// Test import pathway
console.log(getParam("product"));


