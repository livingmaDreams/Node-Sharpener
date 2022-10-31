const express = require('express');
const app = express();

const bp = require('body-parser');
app.use(bp.urlencoded());

const loginRouter = require('./login.js');
const homeRouter = require('./home.js');



app.use('/login',loginRouter)
app.use('/',homeRouter)

app.use((req,res,next) =>{
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(3000);