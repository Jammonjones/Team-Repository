// connect url here 
const baseURL = "https://wdd330-backend.onrender.com";
// small module
// convertToJson is not exported meaning we won't
// run it outside of this module
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

// the category defaults to tents 
// so if we don't pass anything in
// it will return tents
export async function getData(category) {
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  return data.Result;
}
// findProductByID is easier to understand than getData
// async/wait functions are easier to write than .then() promises

export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const product = await convertToJson(response);
  return product.Result;
}