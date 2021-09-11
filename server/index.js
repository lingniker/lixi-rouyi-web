var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

var shStr = 'sh ./bin/deploy.sh';

/* GET home page. */
router.get('/operation', function(req, res, next) {
  // console.log('node 热跟新 -----', req.query);
  // console.log('get req.query', req.query);
  exec(shStr ,function(error,stdout,stderr){
    console.log(error,stdout,stderr)
  })
  res.json(req.query);
});

/* GET home page. */
router.post('/operation', function(req, res, next) {
  // console.log('post req.body', req.body);
  // console.log('只有 web-dev 分支才会自动更新 -- 暂时先不考虑自动话更新的事情')
  if (req.body.ref.indexOf('web-dev') > -1) {
    exec(shStr ,function(error,stdout,stderr){
      console.log(error,stdout,stderr)
    })
    res.json(req.body);
  }
});

module.exports = router;