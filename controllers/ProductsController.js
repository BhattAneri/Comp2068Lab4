const viewPath = ('products');
const Product = require('../models/product');

exports.show = async (req, res) => {
    // try {
    //   const product = await product.findById(req.params.id);
    //   res.render(`${viewPath}/show`, {
    //     pageTitle: product.name,
    //     product: product
    //   });
    // } catch (error) {
    //   req.flash('danger', `There was an error displaying this product: ${error}`);
    //   res.redirect('/');
    // }
    Product.findById(req.params.id)
    .then(product => {
      res.render('${viewPath}/show', {
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
  // try {
  //   const product = await product.create(req.body);
  //   req.flash('success', 'Product created successfully');
  //   res.redirect('/products/show');
  // } catch (error) {
  //   req.flash('danger', `There was an error creating this Product: ${error}`);
  //   req.session.formData = req.body;
  // }
  Product.create(req.body.product)
  .then(() => {
    res.redirect('/products');
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};