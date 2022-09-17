if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  const express = require('express')
  const app = express()
  const bodyParser = require('body-parser')
  
//   const indexRouter = require('./routes/index')
//   const authorRouter = require('./routes/authors')
//   const bookRouter = require('./routes/books')
  
  app.set('view engine', 'ejs')
  
app.get('/', (req, res) => {
    //   res.send('Successful response.');
      res.sendFile(__dirname + '/front.html');
    });
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
  
  const mongoose = require('mongoose')
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  const db = mongoose.connection
  db.on('error', error => console.error(error))
  db.once('open', () => console.log('Connected to Mongoose'))
  
//   app.use('/', indexRouter)
//   app.use('/authors', authorRouter)
//   app.use('/books', bookRouter)
  
  app.listen(process.env.PORT || 3000)