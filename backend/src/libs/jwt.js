const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {
   if(!req.headers.authorization) return res.status(401).send('Unauthorized request');
   const token = req.headers.authorization.split(' ')[1];
   if(token === null) return res.status(401).send('Unauthorized request');
   try {
      const payload = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = payload._id;
      next();
   } catch (error) {
      console.log(error.message);
      return res.status(401).send('Unauthorized request');
   }
}

module.exports = validateToken;