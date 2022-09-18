const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    author: String,
    pageNumber: Number,
    Title: String,
    PublishDate: Date,
    Description: String,
    
})

module.exports = mongoose.model('book', bookSchema, "book")