const express = require('express')

const mongoose = require('mongoose')

const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use('*/bookcover', express.static('./public/bookcover')); //Basically gives this thing html
app.use('*/css', express.static('./public/css'));

app.get("/", (req,res) =>{
    res.render("front")
})

app.get("/addBook", (req,res) =>{
    res.render("addBook")
})
app.get("/searchBook", (req,res) =>{
    res.render("searchBook")
})

app.listen(3000, () => console.log('Server running on port 3000!'))