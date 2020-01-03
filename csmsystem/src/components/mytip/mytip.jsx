import React from "react";

import "./tip.css";
/*登录路由组件 */
export default class MyTips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipMsg: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      tipMsg: nextProps.tipMsg
    });
    setTimeout(() => {
      this.setState({
        tipMsg: ""
      });
    }, 5000);
  }
  render() {
    var { tipMsg } = this.state;
    return (
      <div className={tipMsg ? "tips" : "no-tips"}>
        <span>{tipMsg}</span>
      </div>
    );
  }
}
