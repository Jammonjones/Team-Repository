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
export default function getData(category = "tents") {
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
