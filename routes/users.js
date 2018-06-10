var express = require('express');
var router = express.Router();
require('../routes/SqlClient');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 登录页面
router.post('/login', function(req, res) {
      userName2 = req.param('userName'),
      userPwd2 = req.param('userPwd');//注意req.query,req.param
      console.log('req.param用户名:'+userName2);
      console.log('req.param密码:'+userPwd2);

  var whereSql = userName2 ? "SELECT * FROM `user` WHERE `username` LIKE '%"+userName2+"%' LIMIT 0, 1000" : "";

  var sqlClient = new SqlClient();
  sqlClient.queryBySql(whereSql, null, function (result) {
    if (result != null && result.length > 0) {
        var data = result[0];
            if(data.birthday) {
                data.birthday = CommonUtil.toDateString(data.birthday)
            }
          // console.log(data)
          res.render('success',{data:data});
    } else {
        res.render('fail',{msg: '用户名不存在'});
    }
  });
});

module.exports = router;
