const express = require('express')

const router = express.Router()
const User = require('../models/user')


//Getting all
router.get('/', async (req, res) => {
  try{
    const users = await User.find()
    res.json(users)
  } catch(err){
    res.status(500).json({message: err.message})
  }
})

//Getting One

router.get('/:id', getUser,(req, res) => {
  res.json(res.user)
})

//Creating one
router.post('/', async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    employeeFlag: req.body.employeeFlag
  })
  try{
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch(err){
    res.status(400).json({message: err.message})
  }

})

//Updating one
router.patch('/:id', getUser, async(req, res) => {
  if(req.body.email != null) {
    res.user.email = req.body.email
  }
  if(req.body.password != null) {
    res.user.password = req.body.password
  }
  if(req.body.firstName != null) {
    res.user.firstName = req.body.firstName
  }
  if(req.body.lastName != null) {
    res.user.lastName = req.body.lastName
  }
  if(req.body.phoneNumber != null) {
    res.user.phoneNumber = req.body.phoneNumber
  }
  if(req.body.employeeFlag != null) {
    res.user.employeeFlag = req.body.employeeFlag
  }
  if(req.body.email != null) {
    res.user.email = req.body.email
  }
  try {
    const updatedUser = await res.user.save()
    res.json(updatedUser)
  }catch (err){
    res.status(400).json({message: err.message})
  }
})

//Deleting One
router.delete('/:id',getUser, async(req, res) => {
  try{
    await res.user.remove()
    res.json({ message: 'Deleted user'})
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})


async function getUser(req,res, next){
  let user 
  try {
    user = await User.findById(req.params.id)
    if (user == null)
      return res.status(404).json({message: 'Cannot find user' })
  } catch(err) {
    return res.status(500).json({message: err.message})
  }

  res.user = user
  next()
}


module.exports = router