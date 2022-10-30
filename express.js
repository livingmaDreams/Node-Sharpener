const express = require('express');
const app = express();

const bp = require('body-parser');
app.use(bp.urlencoded({extended:false}));



app.get('/add-product',(req,res,next) =>{
    res.send('<html><form action="/product" method="POST"><label for="title">Name</label><input type="text" name="title"><label for="size">Size</label><input type="text" name="size"><button type="submit">Submit</button></form></html>');
})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from Express JS</h1>')
})

app.listen(3100);