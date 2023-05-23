// small module
// convertToJson is not exported meaning we won't
// run it outside of this module
const baseURL = import.meta.env.VITE_SERVER_URL
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}
export async function getData(category) {
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  return data.Result;
}

// the category defaults to tents 
// so if we don't pass anything in
// it will return tents
export function getData(category = "tents") {
  return fetch(`../json/${category}.json`)
    .then(convertToJson)
    // arrow function
    .then((data) => data);
}

// findProductByID is easier to understand than getData
// async/wait functions are easier to write than .then() promises
export async function findProductById(id) {
  const products = await getData();
  // arrow function
  return products.find((item) => item.Id === id);
}
