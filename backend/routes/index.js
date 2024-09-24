const express = require('express');
const router = express.Router();
const path = require("path");
const conn = require("../config/database");


router.get('/', (req, res) => {
    console.log('Main Router');
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'))
});



module.exports = router;