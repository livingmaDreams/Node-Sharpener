const express = require('express');
const app = express();

const bp = require('body-parser');

const adminRoutes = require('./routes/admin.js');

const shopRoutes = require('./routes/shop.js');


app.use(bp.urlencoded({extended:false}));
app.use('/home',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next) =>{
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(3000);