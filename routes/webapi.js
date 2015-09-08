/**
 * Created by snow on 2015/9/8.
 */
var express = require('express');
var router = express.Router();

/* GET html5 api. */
router.get('/', function(req, res, next) {
    res.render('webSocket', { title: 'Express' });
});

module.exports = router;
