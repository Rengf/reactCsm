import React from "react";

import "./search.css";

export default class Search extends React.Component {
  render() {
    return (
      <div className="search-box">
        <label>
          <input type="text" placeholder="请输入搜索内容" />
          <button>搜索</button>
        </label>
      </div>
    );
  }
}
