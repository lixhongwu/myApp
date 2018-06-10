var express = require('express');
var router = express.Router();
var soap = require('soap');
var url = 'http://www.webxml.com.cn/WebServices/WeatherWebService.asmx?wsdl';

// 根据省名称查询市
router.post('/queryCity', function(req, res) {
    var province = req.param('province');
    // console.log('#######'+ province);
    if(province) {
        var args = { byProvinceName: province};
        soap.createClient(url, function(err, client) {
            client.getSupportCity(args, function(err, result) {
                if (err) {

                }else {
                    if(result.getSupportCityResult.string.length > 0) {
                        var cityList = result.getSupportCityResult.string;
                        console.log('#######'+ cityList);
                        res.render('queryCity',{cityList:cityList,province:province});
                    }
                }
            });
        });
    }
});

module.exports = router;
