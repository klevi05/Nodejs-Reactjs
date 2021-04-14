const express = require('express');
const router = express();
const User = require('../model/User');
const { body, validationResult } = require('express-validator')

router.post('/register', body('username').isAlphanumeric(), body('email').isEmail().normalizeEmail(), body('password').isLength({min:6}), async (req, res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({
      sucses: false,
      errors: errors.array()
    });
  }
  const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const savedUser = await user.save();
        console.log(savedUser);
    } catch (error) {
        res.status(400).send(error)
    }
    return res.status(200).json();
})


module.exports = router;
