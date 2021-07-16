const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Routes
app.use('/apis',require('./routes'));

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})