const path = require('path');

const rootDir = require('../util/path');

const Product = require('../models/addproduct')

exports.getaddproduct = (req,res,next) =>{
    res.sendFile(path.join(rootDir,'views','addproduct.html'))
   };

exports.postaddproduct = (req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/add-product');
}

exports.shopget = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
    console.log(Product.fetchAll((products) =>{
        console.log(products);
    }));
};