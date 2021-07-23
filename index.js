const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//firebase storage
// const configfirebase = require('./config/firebsae');
// let a = configfirebase.collection('users')
// app.post('/data',async (req,res)=>{
//   let docRef=a.doc(req.body.user.uid)
//   await docRef.set({
//     hobby: req.body.user.hobby,
//     age: req.body.user.age,
//   });
//   res.send('done');
// });


//Routes
app.use('/apis',require('./routes'));
app.use('/apis/users',require('./routes/users'));

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})