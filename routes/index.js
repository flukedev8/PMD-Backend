const express = require('express');
const router = express.Router();
const books = require('../Database/db.json')

router.get('/',(req, res) =>{
    res.send('Hello APIs Welcome');
});


router.get('/books', (req, res) => {
  res.json(books)
})

router.get('/books/:id', (req, res) => {
    res.json(books.find(book => book.id === req.params.id))
})

router.post('/books', (req, res) => {
    const name = req.body
    books.push(req.body)
    res.status(201).json(req.body)
})

router.post('/setup-profile', (req, res) => {
    books.push(req.body)
    res.status(201).json(req.body)
})

router.put('/books/:id', (req, res) => {
    const updateIndex = books.findIndex(book => book.id === req.params.id)
    res.json(Object.assign(books[updateIndex], req.body))
  })

router.delete('/books/:id', (req, res) => {
    const deletedIndex = books.findIndex(book => book.id === req.params.id)
    books.splice(deletedIndex, 1)
    res.status(204).send()
 })

module.exports = router;