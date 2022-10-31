const express = require('express');

const router = express.Router();

const fs = require('fs');

router.get('/',(req,res)=>{
    fs.readFile("message.txt",{encoding :"utf-8"},(err,data)=>{
        if(err){
        console.log(err);
        data="No Chate exists";
        }
        res.send(`${data}<html><title>Home Page</title>
        <body>
        <form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <label for="message">Message</label>
        <input type="text" id="message" name="message">
        <input type="hidden" id="username" name="username">
        <button type="submit">Submit</button>
        </body>
        </html>`)
    })  
   
})

router.post('/',(req,res)=>{
    fs.writeFileSync("message.txt",`${req.body.username} : ${req.body.message} `,{flag : 'a'},(err)=>{
        console.log(err);
    })
    res.redirect('/');

})

module.exports = router;