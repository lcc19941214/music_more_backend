var express = require('express');
var router = express.Router();
var spider = require('../spider/index');

router.get('/xiami', function(req, res, next) {
  spider.getInfo('xiami', (result) => {
    res.json(result);
  });
});

router.get('/netease', function(req, res, next) {
  spider.getInfo('netease', (result) => {
    res.json(result);
  });
});

module.exports = router;
