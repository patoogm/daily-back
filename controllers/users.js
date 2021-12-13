const { validationResult } = require('express-validator')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const createUser = async(req, res) =>{
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  
  try{
    const { name, lastName, dni, email, password, role } = req.body

    const newUser = new User({
      name,
      lastName,
      dni,
      email,
      password,
      role
    })

    const salt = bcrypt.genSaltSync()
    newUser.password = bcrypt.hashSync(password, salt)

    await newUser.save()
    res.json(`User created successfully`)
  }catch(error){
    return res.status(404).json({
      message: "Cannot create user"
    })
  }
}

const editUser = async(req, res) => {

  const { name, lastName, dni, email, password, role } = req.body
  try {
    User.findByIdAndUpdate(req.params.userId, {
      name,
      lastName,
      dni,
      email,
      password,
      role
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
    res.json(`User edited succesfully`)
  } catch (error) {
    return res.status(404).json({
      message: "Cannot edit user"
    })
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    return res.status(404).json({
      message: "Cannot found any user"
    })
  }
}

function normalizeQuery(string = '') {
  return string.replace(/a/g, '[a,á,à,ä]')
     .replace(/e/g, '[e,é,ë]')
     .replace(/i/g, '[i,í,ï]')
     .replace(/o/g, '[o,ó,ö,ò]')
     .replace(/u/g, '[u,ü,ú,ù]');
}

const getUsersByName = async(req,res) =>{
  try {
    const users = await User.find(
      {lastName : {$regex : '.*' + normalizeQuery(req.params.txtSearch) + '.*',$options: "$i"}})
    res.json(users)
  } catch (error) {
    return res.status(404).json({
      message: "Cannot found any user realated to the parameter"
    })
  }
}

const deleteUser = async(req, res) =>{
  try {
    const news = await User.findByIdAndDelete(req.params.userId)
    return res.json(news)
  } catch (error) {
    return resstatus(404).json({
      message: "Connot found the user"
    })
  }
}
module.exports = { createUser, getUsers, editUser, deleteUser, getUsersByName }