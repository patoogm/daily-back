require('dotenv').config()
require('../database/database')
const express = require('express')
const app = express()
const port = process.env.PORT

const createUser = require('../routes/users')
const loginUser = require('../routes/login')

const createNews = require('../routes/news')
const getUsers = require('../routes/users')
const getNews = require('../routes/news')
const getNewsById = require('../routes/news')
const deleteNews = require('../routes/news')

app.use(express.json())

//Ruta
app.use('/', getUsers)
app.use('/', getNews)
app.use('/', getNewsById)
app.use('/', createUser)
app.use('/', loginUser)
app.use('/', createNews)
app.use('/', deleteNews)


app.listen(port, () => {
  console.log(`Estamos en el puerto ${port}`);
})