const path = require('path');

const rootDir = require('../util/path');

exports.addproductget = (req,res,next) =>{
    res.sendFile(path.join(rootDir,'views','addproduct.html'))
   };

exports.addproductpost = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
}