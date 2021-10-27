const User = require('../models/users')

const validateDni = async(dni) =>{
  const isDni = await User.findOne({dni})

  if (isDni) {
    throw new Error(`El DNI ${dni} ya existe`)
  }
}

const validateEmail = async(email) =>{
  const isEmail = await User.findOne({email})

  if (isEmail) {
    throw new Error(`El email ${email} ya existe`)
  }
}

module.exports = { validateDni, validateEmail }