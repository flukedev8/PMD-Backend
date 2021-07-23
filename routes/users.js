const express = require('express');
const router = express.Router();

const usersController = require("../controllers/usersController");

router.get('/test',(req, res) =>{
    res.send('Hello Users Welcome');
});


router.post('/setup-profile', usersController);




module.exports = router;