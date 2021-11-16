const { Router } = require('express')
const route = Router()
const { createNews, getNews, getNewsById, deleteNews, editNews} = require('../controllers/news')

route.get('/get-news', getNews)
route.get('/:newsId', getNewsById)

route.post('/create-news',createNews)
route.delete('/news/:newsId', deleteNews)
route.put('/news/:newsId', editNews)

module.exports = route