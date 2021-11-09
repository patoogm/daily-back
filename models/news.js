const { Schema, model} = require('mongoose')

const news = new Schema({
  title: String,
  image: String,
  newsBody: String,
  date: String,
  autor_id: {type: Schema.ObjectId, ref: 'Users'}
})

module.exports = model('News', news)