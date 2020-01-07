import React from "react";
import moment from "moment";
import { reqCategoryList } from "../../api/index";
import Add from "../../components/add/add";
import Tips from "../../components/mytip/mytip";
import Comfirm from "../../components/mycomfirm/mycomfirm";
import Search from "../../components/search/search";
import Pagination from "../../components/pagination/pagination";

import "./category.css";
export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      comfirmMsg: "",
      tipMsg: "",
      deleteUserId: "",
      totalData: 0,
      isShowAdd: false
    };
  }

  // getComfirm = async data => {
  //   var { deleteUserId } = this.state;
  //   if (data === 0) {
  //     var result = await reqDeleteUser(deleteUserId);
  //     this.setState({
  //       comfirmMsg: "",
  //       tipMsg: result.message
  //     });
  //     this.getUserList();
  //   } else if (data === 1) {
  //     this.setState({
  //       comfirmMsg: ""
  //     });
  //     return;
  //   } else {
  //     return;
  //   }
  // };

  getCategoryList = async (page = 1, limit = 5) => {
    var data = {
      page: page,
      limit: limit
    };
    var result = await reqCategoryList(data);
    this.setState({
      categoryList: result.data.categorylist,
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
    this.getCategoryList(page, limit);
  };

  showAdd = () => {
    var { isShowAdd } = this.state;
    this.setState({
      isShowAdd: !isShowAdd
    });
  };

  closeAdd = data => {
    this.setState({
      isShowAdd: data
    });
  };

  componentDidMount() {
    this.getCategoryList();
  }
  render() {
    let { categoryList, comfirmMsg, tipMsg, totalData, isShowAdd } = this.state;
    return (
      <div className="item-list">
        {isShowAdd ? <Add closeAdd={this.closeAdd}></Add> : null}
        <Comfirm comfirmMsg={comfirmMsg} getComfirm={this.getComfirm}></Comfirm>
        <Tips tipMsg={tipMsg}></Tips>
        <div className="item-header">
          <div className="item-btn">
            <button
              onClick={() => {
                this.showAdd();
              }}
            >
              添加商品
            </button>
          </div>
          <Search></Search>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>商品类名</th>
              <th>添加时间</th>
              <th>类别总量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {categoryList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.category_name}</td>
                  <td>
                    {moment(item.created_time).format("YYYY-MM-DD HH:mm:ss")}
                  </td>
                  <td>{item.goods_count}</td>
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
