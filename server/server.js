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
const getNewsByName = require('../routes/news')
const deleteNews = require('../routes/news')
const editNews = require('../routes/news')
const editUser = require('../routes/users')
const deleteUser = require('../routes/users')
const getUsersByName = require('../routes/users')

app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/', getUsers)
app.use('/', getUsersByName)
app.use('/', createUser)
app.use('/', loginUser)
app.use('/', deleteUser)
app.use('/', editUser)
app.use('/', getNews)
app.use('/', getNewsByName)
app.use('/', createNews)
app.use('/', deleteNews)
app.use('/', editNews)

app.listen(port, () => {
  console.log(`Estamos en el puerto ${port}`);
})