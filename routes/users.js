var express = require('express');
var router = express.Router();
const secretRouter=require('./private/private.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({hi:78})
});

router.use('/i',secretRouter)
module.exports = router;
