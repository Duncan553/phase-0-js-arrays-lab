// Write your code here
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
    console.log(products[0]);
}

function logLastProduct() {
    console.log(products[products.length - 1]);
}

function addProduct(newProduct) {
    products.push(newProduct);
    console.log(products);
}

function updateProductName(products, position, newName) {
    products.push("");
    products[position] = newName;
    console.log(products);
}

function removeLastProduct(products) {
    products.pop();
    console.log(products);
}

logFirstProduct();
logLastProduct();
addProduct("Tablet");
updateProductName(products, 2, "Earphones");
removeLastProduct(products);






// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
