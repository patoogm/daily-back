const { Router } = require('express')
const route = Router()
const { createNews, getNews, getNewsById, deleteNews, editNews} = require('../controllers/news')
const { body } = require('express-validator')

route.get('/get-news', getNews)
route.get('/:newsId', getNewsById)

route.post('/create-news',
body('category').trim().escape().not().isEmpty().withMessage('Invalid category'),
body('description').trim().escape().not().isEmpty().isLength({min:10,max:70}).withMessage('Invalid description'),
body('title').trim().escape().not().isEmpty().isLength({min:3,max:40}).withMessage('Invalid title'),
body('bodyNews').trim().escape().not().isEmpty().isLength({min:10,max:400}).withMessage('Invalid article'),
body('image').trim().escape().not().isEmpty().withMessage('Invalid image'),
createNews)
route.delete('/news/:newsId', deleteNews)
route.put('/news/:newsId', editNews)

module.exports = route