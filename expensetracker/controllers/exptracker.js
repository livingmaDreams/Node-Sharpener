
const Exptracker = require('../models/Exptracker')


exports.getDetails = (req,res,next) => {
    Exptracker.findAll()
    .then(data => res.json({userDetail : data}))
    .catch(err => console.log(err));
}

exports.postDetails = (req,res,next) =>{
  const amount = req.body.amount;
  const description = req.body.description;
  const category = req.body.category;
  const id = req.body.id;
  if(id == ''){
  Exptracker.create({
    amount: amount,
    description: description,
    category: category
  })
  .then(data => res.status(201).json({newUserDetail : data}))
  .catch(err => console.log(err));
  }
  else{
    Exptracker.findByPk(id)
    .then((data)=> {
      data.amount =  amount;
      data.description = description;
      data.category = category;
         return data.save();
     })
     .then((data) =>  res.status(201).json({newUserDetail : data}))
    .catch(err => console.log(err));
}
}

exports.deleteDetail = (req,res,next) => {
    const id = req.params.id;
    Exptracker.destroy({
        where:{
            id:id
        }
    })
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err));
}

exports.editDetail = (req,res,next) =>{
    const id = req.params.id;
    Exptracker.findByPk(id)
    .then((data) => res.status(200).json({userdetail: data}))
    .catch(err => console.log(err));
}