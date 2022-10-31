const express = require('express');

const router = express.Router();


router.get('/',(req,res,next)=>{
    res.send(`<html><title>Login Page</title>
              <body>
              <form onsubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/" method="GET">
              <label for="username">UserName</label>
              <input type="text" id="username" name="username">
              <button type="submit">Submit</button>
              </body>
              </html>`)
})



module.exports = router;