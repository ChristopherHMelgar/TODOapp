const User = require('../models/user');
const jwt = require('jsonwebtoken');

async function _signUp(req, res) {
   const {email, password} = req.body;
   const newUser = new User({
      email, 
      password
   });
   await newUser.save();

   const token = jwt.sign({_id: newUser._id}, process.env.SECRET_KEY);

   res.status(200).json({token});
}

async function _login(req, res) {
   const {email, password} = req.body;
   const user = await User.findOne({email});
   if(!user) return res.status(401).send('User don\'t found');
   if(user.password !== password) return res.status(401).send('Wrong password');

   const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY);

   res.status(200).json({token});
};

module.exports = {
   signUp: _signUp,
   login: _login,
}
