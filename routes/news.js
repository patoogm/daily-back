const { Router } = require('express')
const route = Router()
const { createNews, getNews, getNewsById, deleteNews } = require('../controllers/news')

route.get('/get-news', getNews)
route.get('/:newsId', getNewsById)

route.post('/create-news',createNews)
route.delete('/:newsId', deleteNews)

module.exports = route