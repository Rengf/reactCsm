import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "../../../views/home";
import OrderList from "../../../views/order";
import User from "../../../views/user";

import "./content.css";
export default class Content extends React.Component {
  render() {
    return (
      <div className="content-wrap">
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/user" component={User}></Route>
            <Route path="/order" component={OrderList}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}
