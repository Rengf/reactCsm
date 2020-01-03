import React from "react";

import "./comfirm.css";
/*登录路由组件 */
export default class MyComfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comfirmMsg: ""
    };
  }

  comfirm = num => {
    this.props.getComfirm(num);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      comfirmMsg: nextProps.comfirmMsg
    });
  }
  render() {
    var { comfirmMsg } = this.state;
    return (
      <div className={comfirmMsg ? "comfirm" : "no-comfirm"}>
        <div className="comfirm-box">
          <span>{comfirmMsg}</span>
          <div className="comfirm-btn">
            <button
              onClick={() => {
                this.comfirm(0);
              }}
            >
              确认
            </button>
            <button
              onClick={() => {
                this.comfirm(1);
              }}
            >
              取消
            </button>
          </div>
        </div>
      </div>
    );
  }
}
