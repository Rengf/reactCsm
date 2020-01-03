import React from "react";

import Header from "../../components/common/header/header";
import SiderBar from "../../components/common/siderbar/siderbar";
import Content from "../../components/common/content/content";
import Footer from "../../components/common/footer/footer";
/*登录路由组件 */
export default class Admin extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <SiderBar></SiderBar>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}
