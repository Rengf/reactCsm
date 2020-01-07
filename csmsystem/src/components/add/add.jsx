import React from "react";

import { reqAddCategory } from "../../api/index";

import "./add.css";
export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: ""
    };
  }

  changeHandle = e => {
    this.setState({
      category_name: e.target.value
    });
  };

  addCategory = async () => {
    var { category_name } = this.state;
    var data = {
      category_name: category_name
    };
    var result = await reqAddCategory(data);
    console.log(result);
    if (result.code === 0) {
      console.log(result.message);
    }
  };

  closeAdd = () => {
    this.props.closeAdd(false);
  };

  render() {
    return (
      <div className="add-wrapper">
        <div className="add-box">
          <div className="add-header">
            <span>添加分类</span>
            <i
              className="iconfont"
              onClick={() => {
                this.closeAdd();
              }}
            >
              &#xe711;
            </i>
          </div>
          <div className="add-main">
            <form>
              <label className="text-msg">
                <span>商品类名：</span>
                <input
                  type="text"
                  name="category_name"
                  placeholder="请输入商品类名"
                  onChange={event => {
                    this.changeHandle(event);
                  }}
                />
              </label>
            </form>
          </div>
          <div className="add-btn">
            <button onClick={this.addCategory}>添加</button>
          </div>
        </div>
      </div>
    );
  }
}
