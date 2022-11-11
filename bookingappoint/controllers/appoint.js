const rootDir = require('../util/path');

const path = require('path');  

const User = require('../models/user');


exports.getList = (req,res,next) =>{
    User.findAll()
    .then(data => res.status(200).json({allusers: data}))
    .catch(err => res.status(500).json({error: err}));
}
  
exports.postList = (req,res,next) =>{
    const id = req.body.id;
    const name = req.body.name;
    const mail = req.body.mail;
    const phone = req.body.phone;
    const date = req.body.date;
    const time = req.body.time;

    if(id === ''){
    User.create({
        name: name,
        mail: mail,
        phone: phone,
        date: date,
        time: time
    })
    .then((data) =>  res.status(201).json({newUserDetail : data}))
    .catch(err => res.status(500).json({error: err}));
    }
    else{
        User.findByPk(id)
         .then((data)=> {
           data.name =  name;
           data.mail = mail;
           data.phone = phone;
           data.date = date;
           data.time = time;
              return data.save();
          })
          .then((data) =>  res.status(201).json({newUserDetail : data}))
         .catch(err => res.status(500).json({error: err}));
    }
}

exports.deleteId = (req,res,next) =>{
    const id = req.params.id;
    User.destroy({
        where:{
            id: id
        }})
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json({error: err}));
}   

exports.getEditId = (req,res,next) =>{
    const id = req.params.id;
    User.findByPk(id)
    .then((data) => res.status(200).json({userdetail: data}))
    .catch(err => console.log(err));
}