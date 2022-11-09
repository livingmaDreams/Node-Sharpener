const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    imageURL: imageUrl,
    price: price,
    description: description
  })
  .then(()=> res.redirect('/'))
  .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId)
  .then((prod) =>{
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: prod
    });
  })
  .catch(err => console.log(err));
  }

exports.postEditProduct = (req, res, next) => {
  const updatedId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.findByPk(updatedId)
  .then((prod)=> {
    prod.title = updatedTitle;
    prod.price = updatedPrice;
    prod.imageURL= updatedImageUrl;
    prod.description = updatedDesc;
    return prod.save();
  })
  .then(() =>  res.redirect('/admin/products'))
  .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then((products) =>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.log(err));
};


exports.postDeleteProduct = (req,res,next) =>{
  const prodId = req.params.productId;
    Product.destroy({where:{
      id: prodId
    }})
    .then(()=>res.redirect('/admin/products') )
    .catch(err => console.log(err));
};