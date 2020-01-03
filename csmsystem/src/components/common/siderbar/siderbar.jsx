import React from "react";

import { Link } from "react-router-dom";
import menuList from "../../../config/menuConfig";
import "./siderbar.css";

export default class SiderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubIndex: NaN
    };
  }

  showSubList = i => {
    var { showSubIndex } = this.state;
    if (i === showSubIndex) {
      this.setState({
        showSubIndex: NaN
      });
    } else {
      this.setState({
        showSubIndex: i
      });
    }
  };

  render() {
    let { showSubIndex } = this.state;
    return (
      <div className="menu">
        <div className="switch_style">
          <i className="iconfont icon-ren window">&#xe639;</i>
        </div>
        <div className="skin_select">
          <ul>
            <li style={{ backgroundColor: "#222a2d" }} key="#222a2d"></li>
            <li style={{ backgroundColor: "#438EB9" }} key="#438EB9"></li>
            <li style={{ backgroundColor: "#72B63F" }} key="#72B63F"></li>
            <li style={{ backgroundColor: "#41a2ff" }} key="#41a2ff"></li>
            <li style={{ backgroundColor: "#FF6868" }} key="#FF6868"></li>
            <li style={{ backgroundColor: "#6F036B" }} key="#6F036B"></li>
          </ul>
        </div>
        <div className="column_list">
          <ul>
            {menuList.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    this.showSubList(index);
                  }}
                >
                  <div title="title" className="titleUl">
                    <i
                      className="iconfont icon-ren icon"
                      dangerouslySetInnerHTML={{
                        __html: item.icon
                      }}
                    ></i>
                    <span>{item.title}</span>
                    {showSubIndex === index ? (
                      <i
                        className="iconfont icon-ren fadown"
                        dangerouslySetInnerHTML={{
                          __html: "&#xe669;"
                        }}
                      ></i>
                    ) : (
                      <i
                        className="iconfont icon-ren fadown"
                        dangerouslySetInnerHTML={{
                          __html: item.faup
                        }}
                      ></i>
                    )}
                  </div>
                  <ul className={showSubIndex === index ? "sublist" : "noshow"}>
                    {item.sublists.map((subitem, index) => {
                      return (
                        <li key={index}>
                          <Link
                            title="sublist.title"
                            className="subtitleUl"
                            to={subitem.url}
                            onClick={e => {
                              e.stopPropagation();
                            }}
                          >
                            <i className="subbox"></i>
                            <i
                              className="iconfont icon-ren subicon"
                              dangerouslySetInnerHTML={{
                                __html: subitem.icon
                              }}
                            ></i>
                            <span>{subitem.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
