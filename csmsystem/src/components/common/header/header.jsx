import React from "react";

import "./header.css";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowNews: false,
      isShowAdmin: false
    };
  }
  showNews = () => {
    let { isShowNews } = this.state;
    this.setState({
      isShowNews: !isShowNews
    });
  };
  showAdmin = () => {
    let { isShowAdmin } = this.state;
    this.setState({
      isShowAdmin: !isShowAdmin
    });
  };
  render() {
    let { isShowAdmin, isShowNews } = this.state;

    return (
      <div className="header">
        <div className="left_box box">
          <span className="logo">商品销售后台管理系统</span>
          <i className="edition">1.0</i>
        </div>
        <div className="right_box box">
          <div className="search_box">
            <input type="text" className="search" />
            <span className="search_btn">
              <i className="iconfont icon-ren">&#xe60b;</i>
            </span>
          </div>
          <div className="message_box">
            <span
              onClick={() => {
                this.showNews();
              }}
            >
              <i className="iconfont icon-ren">&#xe8c0;</i>
              <em className="message_num">5</em>
            </span>
          </div>
          <div className="admin_box">
            <p
              onClick={() => {
                this.showAdmin();
              }}
            >
              <img
                src="userinfo.user_avatar"
                alt="portrait"
                className="portrait"
              />
              <span>欢迎您，普通管理员</span>
              <i className="iconfont icon-ren">&#xe665;</i>
            </p>
            {isShowAdmin ? (
              <ul className="admin_other">
                <li onClick={this.close}>
                  <i className="iconfont icon-ren">&#xe72b;</i>
                  <span>个人信息</span>
                </li>
                <li>
                  <i className="iconfont icon-ren">&#xe667;</i>
                  <span>系统设置</span>
                </li>
                <li>
                  <i className="iconfont icon-ren">&#xe6a1;</i>
                  <span>退出</span>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
        {isShowNews ? (
          <div className="news_box">
            <div className="news_header">通知消息</div>
            <ul className="news_body">
              <li>
                <h5>消息种类</h5>
                <span className="news_detail">
                  <i className="iconfont icon-ren">&#xe615;</i>
                  <span>你有订单没有处理，请及时处理，点击查看详情。</span>
                </span>
              </li>
              <li>
                <h5>消息种类</h5>
                <span className="news_detail">
                  <i className="iconfont icon-ren">&#xe615;</i>
                  <span>你有订单没有处理，请及时处理，点击查看详情。</span>
                </span>
              </li>
              <li>
                <h5>消息种类</h5>
                <span className="news_detail">
                  <i className="iconfont icon-ren">&#xe615;</i>
                  <span>你有订单没有处理，请及时处理，点击查看详情。</span>
                </span>
              </li>
              <li>
                <h5>消息种类</h5>
                <span className="news_detail">
                  <i className="iconfont icon-ren">&#xe615;</i>
                  <span>你有订单没有处理，请及时处理，点击查看详情。</span>
                </span>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}
