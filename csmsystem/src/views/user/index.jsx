import React from "react";
import moment from "moment";
import { reqUserList, reqDeleteUser } from "../../api/index";
import Tips from "../../components/mytip/mytip";
import Comfirm from "../../components/mycomfirm/mycomfirm";
import Search from "../../components/search/search";
import Pagination from "../../components/pagination/pagination";

import "./user.css";
export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      comfirmMsg: "",
      tipMsg: "",
      deleteUserId: "",
      totalData: 0
    };
  }

  getComfirm = async data => {
    var { deleteUserId } = this.state;
    if (data === 0) {
      var result = await reqDeleteUser(deleteUserId);
      this.setState({
        comfirmMsg: "",
        tipMsg: result.message
      });
      this.getUserList();
    } else if (data === 1) {
      this.setState({
        comfirmMsg: ""
      });
      return;
    } else {
      return;
    }
  };

  getUserList = async (page = 1, limit = 5) => {
    var data = {
      page: page,
      limit: limit
    };
    var result = await reqUserList(data);
    this.setState({
      userList: result.data.userlist,
      totalData: result.data.count
    });
  };

  deleteUser = id => {
    this.setState({
      deleteUserId: id,
      comfirmMsg: "确认删除该用户？"
    });
  };

  editUser = id => {
    console.log(id);
  };

  toPage = (page, limit) => {
    this.getUserList(page, limit);
  };

  componentDidMount() {
    this.getUserList();
  }
  render() {
    let { userList, comfirmMsg, tipMsg, totalData } = this.state;
    return (
      <div className="user-list">
        <Comfirm comfirmMsg={comfirmMsg} getComfirm={this.getComfirm}></Comfirm>
        <Tips tipMsg={tipMsg}></Tips>
        <Search></Search>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>用户名</th>
              <th>性别</th>
              <th>生日</th>
              <th>用户类型</th>
              <th>简介</th>
              <th>注册电话</th>
              <th>注册邮箱</th>
              <th>注册时间</th>
              <th>最近修改</th>
              <th>上次登录</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.nickname}</td>
                  <td>
                    {item.gender === -1
                      ? "未知"
                      : item.gender === 0
                      ? "男"
                      : "女"}
                  </td>
                  <td>{moment(item.birthday).format("YYYY-MM-DD")}</td>
                  <td>
                    {item.user_type === 0
                      ? "普通用户"
                      : item.user_type === 1
                      ? "普通管理员"
                      : "超级管理员"}
                  </td>
                  <td>{item.bio}</td>
                  <td>{item.tel}</td>
                  <td>{item.email}</td>
                  <td>
                    {moment(item.created_time).format("YYYY-MM-DD HH:mm:ss")}
                  </td>
                  <td>
                    {moment(item.last_modified_time).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </td>
                  <td>
                    {moment(item.last_login_time).format("YYYY-MM-DD HH:mm:ss")}
                  </td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.deleteUser(item._id);
                      }}
                    >
                      删除
                    </button>
                    <button
                      onClick={() => {
                        this.editUser(item._id);
                      }}
                    >
                      编辑
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination totalData={totalData} toPage={this.toPage}></Pagination>
      </div>
    );
  }
}
