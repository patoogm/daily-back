const { Schema, model } = require('mongoose')

const user = new Schema({
  name: String,
  lastName: String,
  dni: Number,
  province: String,
  email: String,
  password: String,
})

module.exports = model('User', user)