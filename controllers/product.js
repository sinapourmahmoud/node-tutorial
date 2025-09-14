const { products } = require("../models/products");

function get_all_products(req, res) {
  return res.status(200).send(JSON.stringify(products));
}

function get_product(req, res) {
  console.log(products);
  const id = parseInt(req.params.id);
  const product = products.filter((product) => product.id == id);
  if (product.length == 0) {
    return res.status(404).send("product not found");
  } else {
    return res.status(200).send(JSON.stringify(product));
  }
}

module.exports={
    get_all_products,get_product
}