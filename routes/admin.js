const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next) =>{
    res.send('<html><form action="/home/add-product" method="POST"><label for="title">Name</label><input type="text" name="title"><label for="size">Size</label><input type="text" name="size"><button type="submit">Submit</button></form></html>');
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
})

module.exports = router;