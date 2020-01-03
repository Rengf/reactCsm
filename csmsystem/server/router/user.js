var express = require("express");
var md5 = require("md5");
var router = express.Router();
var User = require("../models/user.js");
var date = require("../public/fmt");

/*  判断是否登录  */
router.get("/", function(req, res, next) {
    if (req.session.user) {
        res.status(200).json({
            code: 0,
            message: "已登录",
            user: req.session.user
        });
    } else {
        res.status(200).json({
            code: 1,
            message: "未登录"
        });
    }
});

//登录
router.post("/login", function(req, res) {
    var userdata = req.body.data;
    var tel = userdata.tel;
    var password = userdata.password;
    var captcha = userdata.captchatext;
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    var last_login_time = d.Format("yyyy-MM-dd HH:mm:ss");
    if (tel == "" || password == "" || captcha == "") {
        return res.json({
            code: 1,
            message: "信息不能为空！"
        });
    } else {
        if (captcha === req.session.captcha) {
            User.findOne({
                    tel: tel,
                    password: md5(md5(password + "csmsystem") + "csmsystem")
                },
                function(err, user) {
                    if (err) {
                        return res.json({
                            code: 1,
                            message: err.message
                        });
                    }

                    if (!user) {
                        return res.json({
                            code: 1,
                            message: "电话号码或密码错误！"
                        });
                    }

                    req.session.user = user;
                }
            ).then(function(data, err) {
                User.updateOne({
                    _id: data._id
                }, {
                    last_login_time: last_login_time
                }).then(function(data, err) {
                    if (err) {
                        return res.json({
                            code: 1,
                            message: "服务端发送错误"
                        });
                    }
                    res.json({
                        code: 0,
                        message: "登录成功！"
                    });
                });
            });
        } else {
            return res.json({
                code: 1,
                message: "验证码错误！"
            });
        }
    }
});

//注册
router.post("/register", function(req, res) {
    var userdata = req.body.data;
    var tel = userdata.tel;
    var password = userdata.password;
    var email = userdata.email;
    var captcha = userdata.captchatext;
    var date = new Date();
    var created_time = date.Format("yyyy-MM-dd HH:mm:ss");
    if (tel == "" || password == "" || captcha == "") {
        return res.json({
            code: 1,
            message: "信息不能为空！"
        });
    } else {
        if (captcha === req.session.captcha) {
            User.findOne({
                    $or: [{
                            tel: tel
                        },
                        {
                            email: email
                        }
                    ]
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
                            message: "邮箱或电话已注册！"
                        });
                    }
                    new User({
                        tel: tel,
                        email: email,
                        password: md5(md5(userdata.password + "csmsystem") + "csmsystem"),
                        nickname: "csmsystem" + tel,
                        created_time: created_time
                    }).save(function(err, user) {
                        if (err) {
                            return res.json({
                                code: 1,
                                message: "服务端发送错误"
                            });
                        }
                        //记录登录状态
                        req.session.user = user;

                        res.json({
                            code: 0,
                            message: "注册成功！"
                        });
                    });
                }
            );
        } else {
            return res.json({
                code: 1,
                message: "验证码错误！"
            });
        }
    }
});

//退出登录
router.get("/logout", function(req, res) {
    req.session.user = null;
    res.status(200).json({
        code: 200,
        message: "退出成功"
    });
});
module.exports = router;