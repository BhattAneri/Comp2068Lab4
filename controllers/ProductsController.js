const viewPath = ('products');
const Product = require('../models/product');

exports.show = async (req, res) => {
    Product.findById(req.params.id)
    .then(product => {
      res.render(`${viewPath}/show`, {
        pageTitle: product.name,
        product: product
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
  };

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New Product'
  })
};

exports.create = async (req, res) => {

  Product.create(req.body.product)
  .then(() => {
    res.redirect(`${viewPath}/show`);
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};