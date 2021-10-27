require('dotenv').config()
require('../database/database')
const express = require('express')
const app = express()
const port = process.env.PORT
const createUser = require('../routes/users')

app.use(express.json())

//Ruta
app.use('/', createUser)

app.listen(port, () => {
  console.log(`Estamos en el puerto ${port}`);
})