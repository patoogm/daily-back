const { Schema, model} = require('mongoose')

const news = new Schema({
  category: String,
  title: String,
  description: String,
  image: String,
  newsBody: String,
  date: String,
  autor_id: {type: Schema.Types.ObjectId, ref: 'Users'}
})

module.exports = model('News', news)