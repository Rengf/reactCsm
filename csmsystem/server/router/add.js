var express = require("express");
var router = express.Router();
var date = require("../public/fmt")();
var Category = require("../models/category");
// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();
// var fs = require('fs');
// var path = require('path');

//添加商品类别
router.post("/addcategory", (req, res, next) => {
    var cdata = req.body;
    var date = new Date();
    var created_time = date.Format("yyyy-MM-dd HH:mm:ss");
    Category.findOne({
            category_name: cdata.category_name
        },
        function(err, data) {
            if (err) {
                return res.json({
                    code: 1,
                    message: "服务端发送错误！"
                });
            }
            if (data) {
                return res.json({
                    success: true,
                    message: "该类别已经存在！"
                });
            }
            new Category({
                category_name: cdata.category_name,
                created_time: created_time
            }).save(function(err, user) {
                if (err) {
                    return res.json({
                        code: 1,
                        message: "服务端发送错误"
                    });
                }

                res.json({
                    code: 0,
                    message: "添加成功！"
                });
            });
        }
    );
});

module.exports = router;