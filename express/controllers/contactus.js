const rootDir = require('../util/path');

const path = require('path');

exports.contactusget = (req,res,next) =>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))}
exports.contactuspost = (req,res,next) =>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','success.html'))
   }

