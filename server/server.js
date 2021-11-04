require('dotenv').config()
require('../database/database')
const express = require('express')
const app = express()
const port = process.env.PORT
const createUser = require('../routes/users')
const loginUser = require('../routes/login')

app.use(express.json())

//Ruta
app.use('/', createUser)
app.use('/', loginUser)

app.listen(port, () => {
  console.log(`Estamos en el puerto ${port}`);
})