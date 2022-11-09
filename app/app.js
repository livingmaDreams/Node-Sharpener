const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const sequelize = require('./util/database');
sequelize
.sync()
.then(res =>{
    app.listen(3000); 
})
.catch(err => console.log(err));



