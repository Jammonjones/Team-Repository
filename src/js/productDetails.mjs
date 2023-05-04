// Using url param display content for product id
export default function productDetails(productId){

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

// Add content to html product_pages.html
function renderProductDetails(){
    return;
}
