var express = require("express");
var router = express.Router();
var User = require("../models/user")
    // var multipart = require('connect-multiparty');
    // var multipartMiddleware = multipart();
    // var fs = require('fs');
    // var path = require('path');

// var svgCaptcha = require("svg-captcha");

/**获取用户列表 */
router.post("/userlist", function(req, res) {
    var page = req.body.page;
    var limit = req.body.limit;
    User.find()
        .sort({
            created_time: -1
        }).skip((page - 1) * 10).limit(limit)
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
                    data: userlist
                });
            }
        });
});

module.exports = router;