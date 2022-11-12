const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const path = require('path');

var cors = require('cors');
app.use(cors());

const expRouter = require('./routes/exptracker');
app.use('/exptracker',expRouter);

const sequelize = require('./util/database');
sequelize
.sync()
.then(() => app.listen(3000))
.catch(err => console.log(err));