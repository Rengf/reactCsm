import React from "react";

import "./pagination.css";
export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPage: 0,
      limit: 5,
      totalData: 0
    };
  }

  prevPage = () => {
    var { currentPage } = this.state;

    var newPage = currentPage - 1;

    if (newPage < 1) {
      return;
    } else {
      this.toPage(newPage);
    }
  };

  prevFivePage = () => {
    var { currentPage } = this.state;

    var newPage = currentPage - 5;

    if (newPage < 1) {
      newPage = 1;
      this.toPage(newPage);
    } else {
      this.toPage(newPage);
    }
  };

  nextPage = () => {
    var { currentPage, totalPage } = this.state;

    var newPage = currentPage + 1;

    if (newPage > totalPage) {
      return;
    } else {
      this.toPage(newPage);
    }
  };

  nextFivePage = () => {
    var { currentPage, totalPage } = this.state;

    var newPage = currentPage + 5;

    if (newPage > totalPage) {
      newPage = totalPage;
      this.toPage(newPage);
    } else {
      this.toPage(newPage);
    }
  };

  toPage = page => {
    var { limit } = this.state;
    this.setState({
      currentPage: parseInt(page)
    });
    this.props.toPage(page, parseInt(limit));
  };

  getPageNodes = () => {
    var { totalPage, currentPage } = this.state;
    var pageArr = [];
    if (totalPage > 7) {
      if (currentPage < 5) {
        pageArr = [2, 3, 4, 5, 6];
      } else if (currentPage >= 5 && totalPage - currentPage >= 4) {
        pageArr = [
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2
        ];
      } else if (
        currentPage >= 5 &&
        totalPage - currentPage > 2 &&
        totalPage - currentPage < 4
      ) {
        for (var x = totalPage - 1; x >= currentPage - 2; x--) {
          pageArr.unshift(x);
        }
      } else {
        pageArr = [
          totalPage - 5,
          totalPage - 4,
          totalPage - 3,
          totalPage - 2,
          totalPage - 1
        ];
      }
    } else if (totalPage > 0 && totalPage <= 7) {
      for (var j = totalPage; j > 1; j--) {
        pageArr.unshift(j);
      }
    }
    return pageArr.map((item, index) => {
      return (
        <li
          key={index}
          className={currentPage == item ? "activeLi" : ""}
          onClick={() => {
            this.toPage(item);
          }}
        >
          <span>{item}</span>
        </li>
      );
    });
  };

  jumpPage = () => {
    var page = this.input.value;
    var { totalPage } = this.state;
    if (page > totalPage || page < 1) {
      return;
    } else {
      this.toPage(page);
    }
  };

  setLimit = e => {
    this.setState({
      limit: e.target.value,
      currentPage: 1
    });
    this.props.toPage(1, parseInt(e.target.value));
  };

  componentWillReceiveProps(nextProps) {
    var totalPage = Math.ceil(nextProps.totalData / this.state.limit);
    this.setState({
      totalPage: totalPage,
      totalData: nextProps.totalData
    });
  }

  render() {
    let { currentPage, totalPage, totalData, limit } = this.state;

    return (
      <div className="pagination-box">
        <div className="pagination">
          <ul>
            <li
              className="prev"
              onClick={() => {
                this.prevPage();
              }}
            >
              <span>
                <i className="iconfont">&#xe651;</i>
              </span>
            </li>
            <li
              className={currentPage === 1 ? "activeLi" : ""}
              onClick={() => {
                this.toPage(1);
              }}
            >
              <span>1</span>
            </li>
            {currentPage - 1 > 3 && totalPage > 7 ? (
              <li
                className="five-page"
                title="向前五页"
                onClick={() => {
                  this.prevFivePage();
                }}
              >
                <i>...</i>
              </li>
            ) : null}
            {this.getPageNodes()}
            {(totalPage - currentPage > 3) & (totalPage > 7) ? (
              <li
                className="five-page"
                title="向后五页"
                onClick={() => {
                  this.nextFivePage();
                }}
              >
                <i>...</i>
              </li>
            ) : null}
            {totalPage > 7 ? (
              <li
                className={currentPage === totalPage ? "activeLi" : ""}
                onClick={() => {
                  this.toPage(totalPage);
                }}
              >
                <span>{totalPage}</span>
              </li>
            ) : null}
            <li
              className="next"
              onClick={() => {
                this.nextPage();
              }}
            >
              <span>
                <i className="iconfont">&#xe652;</i>
              </span>
            </li>
            <li>
              <label>
                跳到第
                <input type="text" ref={input => (this.input = input)} />页
                <button onClick={this.jumpPage.bind(this)}>跳转</button>
              </label>
            </li>
            <li>
              <p>共 {totalData} 条数据</p>
            </li>
            <li>
              <label>
                每页显示
                <input
                  type="text"
                  defaultValue={limit}
                  onChange={this.setLimit}
                />
                条数据
              </label>
            </li>
            <li>
              <p>共 {totalPage} 页</p>
            </li>
            <li>
              <p>当前第 {currentPage} 页</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
