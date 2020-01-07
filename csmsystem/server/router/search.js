var express = require("express");
var router = express.Router();
var User = require("../models/user");
var Category = require("../models/category");


/**获取用户列表 */
router.post("/userlist", function(req, res) {
    var page = req.body.page;
    var limit = req.body.limit;
    var count = 0;
    User.find()
        .countDocuments()
        .then(function(data) {
            count = data;
        });

    User.find()
        .sort({
            created_time: -1
        })
        .skip((page - 1) * limit)
        .limit(limit)
        .then(function(userlist) {
            if (!userlist) {
                res.json({
                    code: 1,
                    message: "服务器发生错误"
                });
            } else {
                res.json({
                    code: 0,
                    message: "获取成功",
                    data: {
                        userlist,
                        count: count
                    }
                });
            }
        });
});

//获取商品类别
router.post("/categorylist", function(req, res) {
    var page = req.body.page;
    var limit = req.body.limit;
    var count = 0;
    Category.find()
        .countDocuments()
        .then(function(data) {
            count = data;
        });

    Category.find()
        .sort({
            created_time: -1
        })
        .skip((page - 1) * limit)
        .limit(limit)
        .then(function(categorylist) {
            if (!categorylist) {
                res.json({
                    code: 1,
                    message: "服务器发生错误"
                });
            } else {
                res.json({
                    code: 0,
                    message: "获取成功",
                    data: {
                        categorylist,
                        count: count
                    }
                });
            }
        });
});

module.exports = router;