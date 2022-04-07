require('dotenv').config()

const express = require("express")
const app= express()
const mongoose = require("mongoose")

mongoose.connect(process.env.database_url)
const db = mongoose.connection
db.on('error', (error) => console.error(error) )
db.once('open', () => console.error("Connected to MongoDB") )

app.use(express.json())

//const subscribersRouter = require('./routes/subscribers')
const usersRouter = require('./routes/users')

//app.use('/subscribers', subscribersRouter)

app.use('/users', usersRouter)

app.listen(3000, () => console.log("Server listening on port 3000!"))