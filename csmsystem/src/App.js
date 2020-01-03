import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./views/login/index.jsx";
import Register from "./views/register/index.jsx";
import Admin from "./views/admin/index.jsx";
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* 还可以HashRoute 有无#的区别 */}
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
