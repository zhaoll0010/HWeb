var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index.html');
});

router.get('/todo', function (req, res, next) {
    res.render("sdf");
});
//123546
module.exports = router;