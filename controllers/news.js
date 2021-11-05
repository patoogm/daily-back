const News = require('../models/news')

const createNews = async(req, res) => {
  const {title,image,newsBody,date,autor_id} = req.body
  try{
    const newNews = new News({
      title,
      image,
      newsBody,
      date,
      autor_id
    }) 
    await newNews.save()
    res.json(`News created successfully`)
  }catch(error){
    return res.json({
      message: error
    })
  }
}


const getNews = async(req, res) =>{
  try {
    const news = await News.find({})
    res.json(news)
  } catch (error) {
    return resstatus(404).json({
      message: "Cannot found any news"
    })
  }
}

const getNewsById = async(req, res) =>{
  try {
    const news = await News.findById(req.params.newsId)
    res.json(news)
  } catch (error) {
    return resstatus(404).json({
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
module.exports = { createNews ,getNews, getNewsById, deleteNews}