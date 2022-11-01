const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path')

router.get('/',(req,res,next) =>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
   })

   router.post('/success',(req,res,next) =>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','success.html'))
   })

module.exports = router;