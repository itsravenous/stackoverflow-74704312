var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log("IN EXPLORE /")
    res.render('index', { title: 'Express' });;
})

router.get('/register', function (req, res, next) {
    console.log("IN EXPLORE /register")
    res.render('index', { title: 'Express' });;
});

module.exports = router;
