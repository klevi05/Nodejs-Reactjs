const express = require('express');
const router = express();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
//const verify = require('./verifyToken');
const bcrypt = require('bcrypt');

let tok = '';
//Router for register
router.post('/register', body('username').isAlphanumeric(), body('email').isEmail().normalizeEmail().custom(
   async value => {
      const em = await User.find({
      email: value
    });
    if (em.length > 0) {
      return Promise.reject('Email already exists');
    }
  }
), body('password').isLength({min:6}), async (req, res)=>{
  const salt = 10;
  const hashPassword = await bcrypt.hash(req.body.password, salt) ;
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword
})
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({
      sucses: false,
      errors: errors.array()
    });
  };

    try {
        const savedUser = await user.save();
        console.log(savedUser);
    } catch (error) {
        res.status(400).send(error)
    }
    return res.status(200).json();
});

//Router for Log In 
router.post('/logIn', body('email').isEmail().normalizeEmail().custom(
  async value => {
      return User.find({
        email: value
      }).then( em => {
        if(em.length === 0){
          return Promise.reject('Email doesent exists')
        }
      })
  }
),body('password').isLength({min:6}), async(req,res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({
      sucses: false,
      errors: errors.array()
    });
  };
  const user = await User.findOne({email: req.body.email});
  const valid = await bcrypt.compare(req.body.password, user.password);
  if(!valid)return res.status(400).json();
  //JWT token
  const token = jwt.sign({_id : user._id} , process.env.ACCESS_TOKEN_SECRET);
  tok = token;
});

router.get('/posts',async (_req, res) => {
  try {
    const valid = jwt.verify(tok, process.env.ACCESS_TOKEN_SECRET)
    console.log(valid)
    return res.status(200).send(valid)
  } catch (error) {
    return res.status(400).send(error)
  }
})

router.post('/remove', async (_req, res) => {
  tok = ''
  return res.send(tok)
})
module.exports = router;
