const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => console.log(err));
};

exports.postProduct = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const quantity = req.body.quantity;

  const product = { name, description, price, quantity };

  Product.create(product)
    .then((product) => {
      return res.json(product);
    })
    .then((result) => {
      console.log('Product Added');
    })
    .catch((err) => console.log(err));
};

exports.postUpdateProduct = (req, res, next) => {
  const productId = req.body.id;
  const quantity = req.body.quantity;
  Product.findByPk(productId)
    .then((product) => {
      product.quantity = quantity;
      return product.save();
    })
    .then((product) => {
      console.log('Product Updated');
      res.json(product);
    })
    .catch((err) => console.log(err));
};
