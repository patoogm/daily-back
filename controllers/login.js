const User = require('../models/users')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const loginUser = async(req, res) =>{
  const{ email, password} = req.body

  const searchEmail = await User.findOne({ email });
  const { _id, name, role } = searchEmail;

  if (searchEmail) {
    const match = bcrypt.compareSync(password, searchEmail.password)
    if (match){
      const payload = {
        check: true
      };
      const token = jwt.sign(payload, process.env.SECRETKEY, {
        expiresIn: 900
      });
      res.status(200).json({ msg:'Usuario logueado exitosamente', token, _id, name, role })
    } else {
      res.status(401).json({ msg: 'Usuario o contraseña incorrecto' })
    }
  } else {
    res.status(401).json({ msg: 'Usuario o contraseña incorrecto' })
  }
}

module.exports = { loginUser }