import { doc } from "prettier";
import { getData, findProductById } from "./productData.mjs";

// Using url param display content for product id
export default function productDetails(productId){
  renderProductDetails(productId);
}

// Add content to html product_pages.html
async function renderProductDetails(prodId){
  // Get current tent object
  let currentProduct = await findProductById(prodId);
  console.log(currentProduct);

  const name = document.querySelector("#productName");
  name.textContent = currentProduct.Name;

  const nameNoBrand =document.querySelector("#productNameWithoutBrand");
  nameNoBrand.textContent = currentProduct.NameWithoutBrand;
  
  const image =document.querySelector("#productImage");
  image.src = currentProduct.Image;

  // const x =document.querySelector("#");
  // x.textContent = currentProduct.

  // const x =document.querySelector("#");
  // x.textContent = currentProduct.

  // const x =document.querySelector("#");
  // x.textContent = currentProduct.

  // const x =document.querySelector("#");
  // x.textContent = currentProduct.


  return;
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
