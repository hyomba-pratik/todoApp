var express = require('express');
var router = express.Router();

/* GET home page. */
/*
 router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
 });
 */

router.get('/partials/*', function (req, res) {
    res.render(req.url.substring(1));
});

router.get('*', function (req, res) {
    res.render('layout', {title: 'Basic CRUD'});
});

module.exports = router;
