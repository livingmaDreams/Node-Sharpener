const path = require('path');


const rootDir = require('../util/path');

exports.shopget = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
};