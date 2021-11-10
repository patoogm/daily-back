const jwt = require('jsonwebtoken')
require('dotenv').config()

const protectionRoutes = (req, res, next) => {
  const token = req.headers['access-token'];

  if (token) {
    jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
      if (err) {
        return res.json({ mensaje: 'Token inválido' });
      } else {
        console.log(decoded)
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      mensaje: 'Token no proveído'
    });
  }
}

module.exports = { protectionRoutes }