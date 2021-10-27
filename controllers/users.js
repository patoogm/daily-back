const { validationResult } = require('express-validator')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const createUser = async(req, res) =>{
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  
  const { name, lastName, dni, direction, number, location, email, password } = req.body

  const newUser = new User({
    name,
    lastName,
    dni,
    direction,
    number,
    location,
    email,
    password
  })

  const salt = bcrypt.genSaltSync()
  newUser.password = bcrypt.hashSync(password, salt)

  await newUser.save()
  res.json(`User created successfully`)
}

module.exports = { createUser }