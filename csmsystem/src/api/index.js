import ajax from "./ajax";

const BASE_URL = "";

//获取登录信息
export const reqIsLogin = () => ajax(BASE_URL + "/user/", {}, "GET");

//登录
export const reqLogin = data =>
    ajax(
        BASE_URL + "/user/login", {
            data
        },
        "POST"
    );

//注册
export const reqRegister = data =>
    ajax(
        BASE_URL + "/user/register", {
            data
        },
        "POST"
    );

//获取验证码
export const reqCaptcha = () => ajax(BASE_URL + "/api/getcaptcha", {}, "GET");

//获取用户列表
export const reqUserList = (data) => ajax(BASE_URL + "/search/userlist", data, "POST");

//删除用户
export const reqDeleteUser = id =>
    ajax(BASE_URL + "/delete/deleteuser", {
        id: id
    }, "POST");