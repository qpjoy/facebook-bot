require('dotenv').config({ path: 'variables.env' });
var express = require('express');
var router = express.Router();

const verifyWebHook = require('../util/verify-webhook');
const messageWebHook = require('../util/message-webhook');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', verifyWebHook);
router.post('/', messageWebHook);

module.exports = router;
