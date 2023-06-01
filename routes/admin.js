const express=require('express');
const router=express.Router();
const sequelize=require('../config/database');
const user=require('../models/user');
const User = require('../models/user');

router.post('/',(req,res,next)=>{
    user.create({
        amount:req.body.amount,
        description:req.body.description,
        category:req.body.category

    })
    .then(result=>{
        res.sendStatus(200).send('expense added to database')
    })
    .catch(error=>{
        console.log(error)
    })
})

router.get('/',(req,res,next)=>{
    user.findAll()
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        console.log(error)
    })
})

router.get('/:id',(req,res,next)=>{
    user.findAll()
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        console.log(error)
    })
})

router.delete('/:id',(req,res,next)=>{
    const prodid=req.params.id;
    User.findByPk(prodid)
    .then(product=>{
       return product.destroy()
       .then(res=>{
        console.log('Product destroyed')
        
       })
       .catch(err=>{
        console.log(err)
       })
    })
    .catch()
})


module.exports=router;