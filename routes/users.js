var express = require('express');
var router = express.Router();

//引入 mongoose 插件
let mongoose = require('mongoose');
let User = require('../models/user');

//链接mongoose的数据库
mongoose.connect('mongodb://localhost:27017/myfirstdb');
mongoose.connection.on('connected', () => {
  console.log('mongoose connected');
})
mongoose.connection.on('open', () => {
  console.log('mongoose open');
});
mongoose.connection.on('error', () => {
  console.log('mongoose error');
});
mongoose.connection.on('disconnected', () => {
  console.log('mongoose disconnected');
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', (req, res, next) => {
  User.findOne({id: '1'}, (err, doc) => {
    if (err) {
      res.json({
        msg: '操作失败~',
        status: '0x001'
      });
    } else {
      if (doc) {
        res.json({
          msg: '成功',
          data: {
            name: doc.name,
            age: doc.age
          }
        });
      } else {
        res.json({
          msg: '用户不存在',
          status: '2000'
        });
      }
    }
  });
});

module.exports = router;
