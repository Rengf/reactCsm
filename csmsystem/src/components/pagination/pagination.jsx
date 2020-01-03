import React from "react";

import "./pagination.css";
export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pagination-box">
        <div className="pagination">
          <ul>
            <li className="prev">
              <span>
                <i className="iconfont">&#xe651;</i>
              </span>
            </li>
            <li>
              <span>1</span>
            </li>
            <li className="five-page" title="向前五页">
              <i>...</i>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li className="five-page" title="向后五页">
              <i>...</i>
            </li>
            <li>
              <span>20</span>
            </li>
            <li className="next">
              <span>
                <i className="iconfont">&#xe652;</i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
