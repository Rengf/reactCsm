import React from "react";
import { reqRegister, reqCaptcha } from "../../api";
// import { Redirect } from "react-router-dom";

import MyTips from "../../components/mytip/mytip";
import "./register.css";

/*注册路由组件 */
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      captcha: "",
      tel: "",
      password: "",
      email: "",
      captchatext: "",
      tipMsg: ""
    };
  }

  handleChange(event, name) {
    this.setState({ [name]: event.target.value });
  }

  getCaptcha = async () => {
    var result = await reqCaptcha();
    if (result.code === 0) {
      this.setState({
        captcha: result.result.img
      });
    } else {
      console.log(result.message);
    }
  };

  register = async () => {
    let { tel, password, captchatext, email } = this.state;
    if (tel === "") {
      this.setState({
        tipMsg: "用户名不能为空"
      });
      return;
    } else if (password === "") {
      this.setState({
        tipMsg: "密码不能为空"
      });
      return;
    } else if (email === "") {
      this.setState({
        tipMsg: "邮箱不能为空"
      });
      return;
    } else if (captchatext === "") {
      this.setState({
        tipMsg: "验证码不能为空"
      });
      return;
    }

    var data = {
      tel: tel,
      password: password,
      email: email,
      captchatext: captchatext
    };

    var result = await reqRegister(data);
    if (result.code === 0) {
      this.setState({
        tipMsg: result.message
      });
    } else {
      this.setState({
        tipMsg: result.message
      });
      this.getCaptcha();
    }
  };

  componentDidMount() {
    this.getCaptcha();
  }

  render() {
    var { tipMsg } = this.state;
    return (
      <div className="register">
        <MyTips tipMsg={tipMsg}></MyTips>
        <header className="register-header">
          {/* <img src={logo} alt="logo" /> */}
          <h1>React项目：后台管理系统</h1>
        </header>
        <section className="register-content">
          <h2>用户注册</h2>
          <form>
            <label htmlFor="tel" className="text-msg">
              <span>电话号码：</span>
              <input
                type="text"
                name="user_tel"
                placeholder="请输入电话号码"
                onChange={event => this.handleChange(event, "tel")}
              />
            </label>
            <label htmlFor="emil" className="text-msg">
              <span>邮箱：</span>
              <input
                type="email"
                name="emil"
                placeholder="请输入电话号码"
                onChange={event => this.handleChange(event, "email")}
              />
            </label>
            <label className="text-msg">
              <span>用户密码：</span>
              <input
                type="password"
                name="password"
                placeholder="请输入密码"
                onChange={event => this.handleChange(event, "password")}
              />
            </label>
            <label className="captcha">
              <span>验证码：</span>
              <input
                type="text"
                placeholder="请输入验证码"
                name="captcha"
                onChange={event => this.handleChange(event, "captchatext")}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: this.state.captcha
                }}
                onClick={this.getCaptcha}
              ></span>
            </label>
          </form>
          <div className="register-btn">
            <button onClick={this.register}>注册</button>
          </div>
        </section>
      </div>
    );
  }
}
