const User = require('../models/users')

const validateDni = async(dni) =>{
  const isDni = await User.find({dni})

  if (isDni.length !== 0) {
    throw new Error(`El DNI ${dni} ya existe`)
  }
  return true
}

const validateEmail = async(email) =>{
  const isEmail = await User.find({email})

  if (isEmail.length !== email) {
    throw new Error(`El email ${email} ya existe`)
  }
  return true
}

module.exports = { validateDni , validateEmail}