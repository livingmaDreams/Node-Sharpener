const path = require('path');

const express = require('express');
const app = express();

const bp = require('body-parser');

const adminRoutes = require('./routes/addproduct.js');
const shopRoutes = require('./routes/shop.js');
const contactusRoutes = require('./routes/contactus.js')

const { errorget } = require('./controllers/error.js');


app.use(bp.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/add-product',adminRoutes);
app.use('/shop',shopRoutes);
app.use('/contactus',contactusRoutes)


app.use(errorget)
app.listen(5000);