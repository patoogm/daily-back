require('dotenv').config()
const mongoose = require('mongoose')

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION)
    console.log('Conexión Exitosa');
  } catch (error) {
    console.log(err);
  }
}

connectionDB()
module.exports = { connectionDB }