const path = require('path');


const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname,'public')));

var cors = require('cors');
app.use(cors());

const appointRouter = require('./routes/appoint')
app.use('/appoint',appointRouter);

const sequelize = require('./util/database');
sequelize
.sync()
.then(() =>{
    app.listen(3000); 
})
.catch(err => console.log(err));

