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
const editNews = require('../routes/news')

app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
//Ruta
app.use('/', getUsers)
app.use('/', getNews)
app.use('/', getNewsById)
app.use('/', createUser)
app.use('/', loginUser)
app.use('/', createNews)
app.use('/', deleteNews)
app.use('/', editNews)

app.listen(port, () => {
  console.log(`Estamos en el puerto ${port}`);
})