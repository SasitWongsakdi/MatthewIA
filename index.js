const express = require('express')

const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL) //Connect to mongoose taking environmental variable

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use('*/bookcover', express.static('./public/bookcover')); //Basically gives this thing html
app.use('*/css', express.static('./public/css'));
const Book = require("./model/book") //Lets you do book.save requrie is basically need a function from a file
const book = require('./model/book')

app.get("/", (req, res) => {
    res.render("front")
})

app.get("/addBook", (req, res) => {
    res.render("addBook")
})
app.get("/searchBook", (req, res) => {
    res.render("searchBook")
})
app.post("/create", (req, res) => { //create book and save to database
    let newBook = new Book({
        author: req.body.author,
        pageNumber: req.body.pagenumber,
        Title: req.body.title,
        Description: req.body.description,
        PublishDate: req.body.publishdate

    })
    newBook.save()
    res.redirect('/')
})




app.listen(3000, () => console.log('Server running on port 3000!'))