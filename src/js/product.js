let products = [];
let cartItems = getLocalStorage("so-cart") || [];
import { setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

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

// add to cart button event handler
function addToCart(e) {
  const productId = e.target.dataset.id;
  const product = products.find((item) => item.Id === productId);
 console.log(typeof cartItems);
  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }
  cartItems.push(product); // add the new product to cartItems array
  setLocalStorage("so-cart", cartItems); // save cart items to local storage
  console.log("Added to cart:", product);
}

// retrieve data from localstorage.
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}


// call init function to fetch data and add event listener
init();
