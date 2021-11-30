const { validationResult } = require('express-validator')
const News = require('../models/news')
const Users = require('../models/users')

const createNews = async(req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }

  const {category, description, title, image, newsBody, date, autor_id} = req.body
  try{
    const newNews = new News({
      category,
      title,
      description,
      image,
      newsBody,
      date,
      autor_id
    }) 
    await newNews.save()
    res.json(`News created successfully`)
  }catch(error){
    return res.status(404).json({
      message: "Cannot create news"
    })
  }
}

const editNews = async(req, res) => {
  console.log(req.params.newsId)
  console.log(req.body.newsBody)
  const {title,image,newsBody,date,autor_id} = req.body
  try {
    News.findByIdAndUpdate(req.params.newsId, {
      category,
      title,
      description,
      image,
      newsBody,
      date,
      autor_id
    },
      {},
      (err,doc,res)=>{
        if(err){
          console.log("Error: " + err )
        } 
        console.log("Doc: "+ doc)
        console.log("Res:" + res)
      }
    )
    res.json(`News edited succesfully`)
  } catch (error) {
    return res.json({
      message: error
    })
  }
}

const getNews = async(req, res) =>{
  try {
    const news = await News.find({}) || []
    const query = await Promise.all(news.map(async article => {
      const autor = await Users.findById(article.autor_id)
      return {article,autor}
    }))
    res.json(query)
  } catch (error) {
    return res.status(404).json({
      message: "Cannot found any news"
    })
  }
}

const getNewsById = async(req, res) =>{
  try {
    const news = await News.findById(req.params.newsId)
    res.json(news)
  } catch (error) {
    return res.status(404).json({
      message: "Cannot found the news"
    })
  }
}

const deleteNews = async(req, res) =>{
  try {
    const news = await News.findByIdAndDelete(req.params.newsId)
    return res.json(news)
  } catch (error) {
    return resstatus(404).json({
      message: "Connot found the news"
    })
  }
}

module.exports = { createNews ,getNews, getNewsById, deleteNews, editNews}