const { validationResult } = require('express-validator')
const User = require('../models/users')

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

  await newUser.save()
  res.json(`User ${newUser} created`)
}

module.exports = { createUser }