const { Schema, model } = require('mongoose')

const user = new Schema({
  name: String,
  lastName: String,
  dni: Number,
  email: String,
  password: String,
  role: String
})

module.exports = model('User', user)