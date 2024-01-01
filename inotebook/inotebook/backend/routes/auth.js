const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../models/User')
var jwt = require('jsonwebtoken')
const { body } = require('express-validator');
const {query, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const SECTRET_KEY = 'helloiam'
// create a user using post at api/auth and doesnt require auth no login required
router.post('/createuser',[
  body('name' , "length is too short").isLength({min : 5}),
  body('password' , "passwords above 6 characters are valid").isLength({ min: 6 }),
  body('email' , "enter valid email").isEmail(),
] , async (req, res)=>{
  // if error return bad request with the error message
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
   
  // check whether user email exists already
  let user = await User.findOne({email: req.body.email});
  if(user){
    return res.status(200).json({ error: "Account with this email already exists." });
  }
  const salt =await  bcrypt.genSalt(10);
   const secPass = await bcrypt.hash(req.body.password , salt) 
  // create a new user 
   user = await User.create({
    name: req.body.name,
    password: secPass,
    email: req.body.email,
  })
  const data = {
    user : {
      id: user.id
    }
  }
const authtoken = jwt.sign(data , SECTRET_KEY);
// console.log(jwtdata);

res.json({authtoken})
 
} catch (error) {
 console.error(error.message);
 res.status(500).send("some error occured")   
}

})


// authenticate a user using post at api/auth and doesnt require auth no login required
router.post('/login',[
  body('email' , "enter valid email").isEmail(),
  body('password' , "password cant be blank").exists(),
] , async (req, res)=>{
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email , password} = req.body;
  try {
    let user =await User.findOne({email})
    if(!user){
      return res.status(404).json({ errors: "enter the correct credentials"});
    }
    const passcompare = await bcrypt.compare(password ,user.password)
    if(!passcompare){
      return res.status(404).json({ errors: "enter  the correct credentials"});
    }

    const data = {
      user : {
        id: user.id
      }
    }
  const authtoken = jwt.sign(data , SECTRET_KEY);
  res.json({authtoken})
  // console.log(jwtdata);
  } catch (error) {
    console.error(error.message);
 res.status(500).send("some error occured")   
  }
})

// Route 3 :  Get user details using post : api/auth/getuser
router.post('/getuser', fetchuser , async (req, res)=>{

  try {
    const  userid = req.user.id
    const user =await  User.findById(userid).select('-password')
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured")   
  }
})
module.exports = router;